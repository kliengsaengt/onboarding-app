import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import OneFieldContent from '../../components/FieldContent/OneFieldContent'
import TwoFieldContent from '../../components/FieldContent/TwoFieldContent'
// import { Validators, Validations } from 'booking-engine/helpers'
import Button from '../../components/Button'
import PasswordStrength from '../../components/Password'
// import WarningIcon from '../../components/WarningIcon'
// import SelectedIcon from '../../components/SelectedIcon'
import './index.scss'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueOne: '',
      valueTwo: '',
      passwordStrengthScore: 0,
      passwordSuggestions: [],
      currentSuggestions: [],
    }
    this.password = null
    this.password_confirm = null
  }

  validatePassword = (value) => {
    let errorMessage
    const {
      score,
      feedback: { suggestions },
    } = zxcvbn(value)

    if (!value) {
      this.setState({
        passwordStrengthScore: 0,
        passwordSuggestions: [],
      })
      return errorMessage
    }
    this.setState({
      passwordStrengthScore: score,
      currentSuggestions: suggestions,
    })
    const different = suggestions.filter(element => !this.state.passwordSuggestions.includes(element))
    if (different.length > 0) {
      this.setState({
        passwordStrengthScore: score,
        passwordSuggestions: [...this.state.passwordSuggestions, ...different],
      })
    }
    if (score < 2) {
      errorMessage = 'Password too weak, think again'
    }
    return errorMessage
  }

  validateConfirmPassword = (value) => {
    if (!value || value === this.password.value) {
      return undefined
    }
    return 'Passwords do not match!'
  }

  onSubmit = (values) => {
    const { onSubmitAccountDetails } = this.props
    onSubmitAccountDetails(values)
  }

  strengthMeter = (passwordStrengthScore) => {
    const { openReasons, passwordSuggestions, currentSuggestions } = this.state
    const getPasswordStrengthLabel = (value) => {
      switch (value) {
        case 0:
          return 'Very weak'
        case 1:
          return 'Weak'
        case 2:
          return 'Acceptable'
        case 3:
          return 'Good'
        case 4:
          return 'Strong'
        default:
          return
      }
    }
    const listColor = ['#e63e52', '#f5a623', '#727c8a', '#0ac0dd', '#2ed180']
    const strengthLabel = getPasswordStrengthLabel(passwordStrengthScore)
    return (
      passwordSuggestions.length > 0
      && (
        <div className='password-strength'>
          <progress
            className={classnames('progress-bar',
              { 'very-weak': passwordStrengthScore === 0 },
              { 'weak': passwordStrengthScore === 1 },
              { 'acceptable': passwordStrengthScore === 2 },
              { 'good': passwordStrengthScore === 3 },
              { 'strong': passwordStrengthScore === 4 }
            )}
            value={passwordStrengthScore + 1}
            max='5'
          />
          <div
            className='label'
            style={{ color: listColor[passwordStrengthScore] }}
          >
            <div className='strength'>
              {/* {[0, 1].includes(passwordStrengthScore) && <WarningIcon className='icon' fill={listColor[passwordStrengthScore]} />}
              {[2, 3, 4].includes(passwordStrengthScore) && <SelectedIcon className='icon' fill={listColor[passwordStrengthScore]} />} */}
              {strengthLabel}
            </div>
            {/* {
              ((strengthLabel !== 'Strong') && (passwordSuggestions.length > 0))
              && (<div className='toggle' onClick={this.toggleReason}>{openReasons ? 'Hide' : 'Why?'}</div>)
            } */}
          </div>
          {/* {
            ((strengthLabel !== 'Strong') && (passwordSuggestions.length > 0) && openReasons)
            && (
              <div className='password-reasons'>
                {
                  (strengthLabel !== 'Strong')
                  && passwordSuggestions.map((reason, index) => {
                    const isStillRed = currentSuggestions.includes(reason)
                    return (
                      <div key={index} className='password-reason'>
                        <img src={isStillRed ? InCorrectIcon : CorrectIcon} width='10px' className='reason-img' />
                        <span className={classnames('reason-red-text', { 'reason-green-text': !isStillRed })}>{reason}</span>
                      </div>
                    )
                  })
                }
              </div>
            )
          } */}
        </div>
      )
    )
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: '',
            password: '',
            password_confirm: '',
          }}
          onSubmit={this.onSubmit}
        >
          {
            (formikProps) => {
              const {
                errors,
                touched,
                values,
                values: { email, password, password_confirm },
                isSubmitting,
                isValid,
              } = formikProps
              const emailField = email && email.length > 0
              const passwordField = password && password.length > 0
              const passwordConfirmField = password_confirm && password_confirm.length > 0
              const hasAllValues = emailField && passwordField && passwordConfirmField
              const isDisableButton = !hasAllValues || !isValid || isSubmitting
              return (
                <div className='sign-up-step-wrapper'>
                  {/* <img src='https://assets.30secondstofly.com/common/images/claire_logo_small_72x72.png' alt='sign in' /> */}
                  <div className='header'>Create Account</div>
                  <div className='have-account-text'>
                    <span className='text'>Already have an account?</span>
                    <span className='link'><Link to={'/sign-in'}>Sign in</Link></span>
                  </div>
                  <Form>
                    {/* <OneFieldContent
                      shouldShowLegend={values.email || errors.email}
                      shouldShowRedWarning={touched.email && errors.email}
                      legendText='Email Address'
                      errorText={touched.email && errors.email}
                    >
                      <Field
                        name='email'
                        placeholder='Email Address (Required)'
                        disabled={isSubmitting}
                        validate={validateEmail}
                      />
                    </OneFieldContent> */}
                    <Field
                      name='email'
                      placeholder='Email Address (Required)'
                      disabled={isSubmitting}
                      validate={validateEmail}
                    />
                    {/* <OneFieldContent
                      shouldShowLegend={values.password || errors.password}
                      shouldShowRedWarning={touched.password && errors.password}
                      legendText='Password'
                    >
                      <Field
                        name='password'
                        validate={this.validatePassword}
                        render={({ field, form: { isSubmitting, errors, touched } }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type='password'
                                placeholder='Password (Required)'
                                ref={(password) => { this.password = password }}
                                disabled={isSubmitting}
                              />
                            </div>
                          )
                        }}
                      />
                    </OneFieldContent> */}
                    <Field
                      name='password'
                      validate={this.validatePassword}
                      render={({ field, form: { isSubmitting, errors, touched } }) => {
                        return (
                          <div>
                            <input
                              {...field}
                              type='password'
                              placeholder='Password (Required)'
                              ref={(password) => { this.password = password }}
                              disabled={isSubmitting}
                            />
                          </div>
                        )
                      }}
                    />
                    <PasswordStrength
                      score={this.state.passwordStrengthScore}
                      passwordSuggestions={this.state.passwordSuggestions}
                      currentSuggestions={this.state.currentSuggestions}
                    />
                    {/*  {this.strengthMeter(this.state.passwordStrengthScore, this.state.passwordSuggestions)}  */}

                    {/* <OneFieldContent
                      shouldShowLegend={values.password_confirm || errors.password_confirm}
                      shouldShowRedWarning={touched.password_confirm && errors.password_confirm}
                      legendText='Confirm Password'
                    >
                      <Field
                        name='password_confirm'
                        validate={this.validateConfirmPassword}
                        render={({ field, form: { isSubmitting, errors, touched } }) => {
                          return (
                            <div>
                              <input
                                {...field}
                                type='password'
                                placeholder='Confirm Password (Required)'
                                ref={(password_confirm) => { this.password_confirm = password_confirm }}
                                disabled={isSubmitting}
                              />
                            </div>
                          )
                        }}
                      />
                    </OneFieldContent> */}
                    <Field
                      name='password_confirm'
                      validate={this.validateConfirmPassword}
                      render={({ field, form: { isSubmitting, errors, touched } }) => {
                        return (
                          <div>
                            <input
                              {...field}
                              type='password'
                              placeholder='Confirm Password (Required)'
                              ref={(password_confirm) => { this.password_confirm = password_confirm }}
                              disabled={isSubmitting}
                            />
                          </div>
                        )
                      }}
                    />
                    {
                      (values.password && values.password_confirm && (values.password === values.password_confirm))
                      && (
                        <div className='password-match'>
                          {/* <SelectedIcon className='icon' fill='#2ed180' /> */}
                           Passwords match!</div>
                      )
                    }
                    {
                      (touched.password_confirm && errors.password_confirm)
                      && (
                        <div className='password-no-match'>
                          {/* <WarningIcon className='icon' fill='#f5a623' /> */}
                          {errors.password_confirm}</div>
                      )
                    }
                    <Button
                      type='submit'
                      color={isDisableButton ? '#f7f7f7' : '#2ed180'}
                      fontColor={isDisableButton ? '#c1cad1' : '#ffffff'}
                      text='Continue'
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

const validateEmail = (value) => {
  return Validators.isEmail(value) ? undefined : 'Invalid email address'
}

Signup.propTypes = {
  onSubmitAccountDetails: PropTypes.func,
}

export default Signup
