

import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import zxcvbn from 'zxcvbn'
import OneFieldContent from '../../../components/FieldContent/OneFieldContent'
import TwoFieldContent from '../../../components/FieldContent/TwoFieldContent'
// import { Validators, Validations } from 'booking-engine/helpers'
import Button from '../../../components/Button'
import PasswordStrength from '../../../components/PasswordStrength'
import WarningIcon from '../../../components//WarningIcon'
// import SelectedIcon from 'booking-engine/components/common/Icons/SelectedIcon'

class ForgotPasswordReset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueOne: '',
      valueTwo: '',
      passwordStrengthScore: 0,
      passwordSuggestions: [],
      currentSuggestions: [],
    }
    this.password = null
    this.password_confirm = null
  }

  validatePassword = (value) => {
    let errorMessage
    const {
      score,
      feedback: { suggestions },
    } = zxcvbn(value)

    if (!value) {
      this.setState({
        passwordStrengthScore: 0,
        passwordSuggestions: [],
      })
      return errorMessage
    }
    this.setState({
      passwordStrengthScore: score,
      currentSuggestions: suggestions,
    })
    const different = suggestions.filter(element => !this.state.passwordSuggestions.includes(element))
    if (different.length > 0) {
      this.setState({
        passwordStrengthScore: score,
        passwordSuggestions: [...this.state.passwordSuggestions, ...different],
      })
    }
    if (score < 2) {
      errorMessage = 'Password too weak, think again'
    }
    return errorMessage
  }

  validateConfirmPassword = (value) => {
    if (!value || value === this.password.value) {
      return undefined
    }
    return 'Passwords do not match!'
  }

  onSubmit = (values) => {
    const { onSubmitAccountDetails } = this.props
    onSubmitAccountDetails(values)
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            password: '',
            password_confirm: '',
          }}
          onSubmit={this.onSubmit}
        >
          {
            (formikProps) => {
              const {
                errors,
                touched,
                values,
                values: { password, password_confirm },
                isSubmitting,
                isValid,
              } = formikProps

              const passwordField = password && password.length > 0
              const passwordConfirmField = password_confirm && password_confirm.length > 0
              const hasAllValues =  passwordField && passwordConfirmField
              const isDisableButton = !hasAllValues || !isValid || isSubmitting
              return (
                <div className='forgot-password-reset-wrapper'>
                  <img src='https://assets.30secondstofly.com/common/images/claire_logo_small_72x72.png' alt='sign in' />
                  <div className='header'>Set New Password</div>
                  <Form>
                    <OneFieldContent
                      shouldShowLegend={values.password || errors.password}
                      shouldShowRedWarning={touched.password && errors.password}
                      legendText='Password'
                    >
                      <Field
                        name='password'
                        validate={this.validatePassword}
                        render={({ field, form: { isSubmitting, errors, touched } }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type='password'
                                placeholder='Password (Required)'
                                ref={(password) => { this.password = password }}
                                disabled={isSubmitting}
                              />
                            </div>
                          )
                        }}
                      />
                    </OneFieldContent>
                    <PasswordStrength
                      score={this.state.passwordStrengthScore}
                      passwordSuggestions={this.state.passwordSuggestions}
                      currentSuggestions={this.state.currentSuggestions}
                    />

                    <OneFieldContent
                      shouldShowLegend={values.password_confirm || errors.password_confirm}
                      shouldShowRedWarning={touched.password_confirm && errors.password_confirm}
                      legendText='Confirm Password'
                    >
                      <Field
                        name='password_confirm'
                        validate={this.validateConfirmPassword}
                        render={({ field, form: { isSubmitting, errors, touched } }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type='password'
                                placeholder='Confirm Password (Required)'
                                ref={(password_confirm) => { this.password_confirm = password_confirm }}
                                disabled={isSubmitting}
                              />
                            </div>
                          )
                        }}
                      />
                    </OneFieldContent>
                    {
                      (values.password && values.password_confirm && (values.password === values.password_confirm))
                      && (
                        <div className='password-match'>
    {/* <SelectedIcon className='icon' fill='#2ed180' /> */}
     Passwords match!</div>
                      )
                    }
                    {
                      (touched.password_confirm && errors.password_confirm)
                      && (
                        <div className='password-no-match'>
    <WarningIcon className='icon' fill='#f5a623' />
    {errors.password_confirm}</div>
                      )
                    }
                    <Button
                      type='submit'
                      color={isDisableButton ? '#f7f7f7' : '#2ed180'}
                      fontColor={isDisableButton ? '#c1cad1' : '#ffffff'}
                      text='Reset Password'
                    />
                  </Form>
                </div>
              )
            }
          }
        </Formik >
      </>
    )
  }
}

ForgotPasswordReset.propTypes = {

}

export default ForgotPasswordReset

