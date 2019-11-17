
import { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import zxcvbn from 'zxcvbn'
import OneFieldContent from 'booking-engine/components/common/FieldContent/OneFieldContent'
import TwoFieldContent from 'booking-engine/components/common/FieldContent/TwoFieldContent'
import { Validators, Validations } from 'booking-engine/helpers'
import Button from '../../components/Button'
import PasswordStrength from '../../components/Password'
import WarningIcon from '../../components/WarningIcon'
// import SelectedIcon from 'booking-engine/components/common/Icons/SelectedIcon'

class ForgotPasswordRequest extends Component {
  constructor(props) {
    super(props)
    this.password = null
    this.password_confirm = null
  }

  validateEmail = (value) => {
    return Validators.isEmail(value) ? undefined : 'Invalid email address'
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
            email: '',
          }}
          onSubmit={this.onSubmit}
        >
          {
            (formikProps) => {
              const {
                errors,
                touched,
                values,
                values: { email },
                isSubmitting,
                isValid,
              } = formikProps
              const emailField = email && email.length > 0
              const isDisableButton = !emailField || !isValid || isSubmitting
              return (
                <div className='forgot-password-request-wrapper'>
                  <div className='header'>Forgot your password?</div>
                  <div className='description'>Enter your email below and we will send you a link to create a new password.</div>
                  <Form>
                    <OneFieldContent
                      shouldShowLegend={values.email || errors.email}
                      shouldShowRedWarning={touched.email && errors.email}
                      legendText='Email Address'
                      errorText={touched.email && errors.email}
                    >
                      <Field
                        name='email'
                        placeholder='Email Address'
                        disabled={isSubmitting}
                        validate={this.validateEmail}
                      />
                    </OneFieldContent>

                    <Button
                      type='submit'
                      color={isDisableButton ? '#f7f7f7' : '#2ed180'}
                      fontColor={isDisableButton ? '#c1cad1' : '#ffffff'}
                      text='Request Password'
                    />
                  </Form>
                </div>
              )
            }
          }
        </Formik>
      </>
    )
  }
}

ForgotPasswordRequest.propTypes = {
}

export default ForgotPasswordRequest
