/* eslint-disable no-shadow */
import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
// import { LoadingWithText } from 'booking-engine/components/common/loading'
// import { AUTH } from 'booking-engine/store/action-types'
// import { featureSelectors } from 'booking-engine/store/features'
// import { signInTraveler as signInTravelerAction } from 'booking-engine/store/features/auth'
import Button from '../../components/Button'
// import ActionCreator from 'booking-engine/store/action-creator'
// import { WarningIcon } from 'booking-engine/components/common/Icons'
import OneFieldContent from '../../components/FieldContent/OneFieldContent'
import './index.scss'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.formTimeout = null
  }

  componentWillUnmount() {
    this.formTimeout = null
  }

  //   onSubmit = async (values, { setErrors, setSubmitting, resetForm }) => {
  //     const { email, password } = values
  //     const { history, signInTraveler } = this.props
  //     let errors = null
  //     // if we switching component we will cause a much trouble later on
  //     // because it is unmounted
  //     // then formik will not able to change its state
  //     // this.setState({ loading: true })

  //     try {
  //       const response = await signInTraveler({ email, password })
  //       if (response && (response.type !== 'SIGNIN_FAILED')) {
  //         console.log('thissss', response)
  //         history.push('/app/claire')
  //       } else {
  //         errors = {
  //           email: 'invalid email and/or password',
  //           password: 'invalid email and/or password',
  //         }
  //         setErrors(errors)
  //         setSubmitting(false)
  //       }
  //     } catch (error) {
  //       throw error
  //     }
  //     // } 
  //     // catch (error) {
  //     //   console.log('catchhh')
  //     //   // TODO: If sign in failed, render error from api
  //     //   // https://github.com/jaredpalmer/formik/issues/33#issuecomment-312949822

  //     //   errors = {
  //     //     email: 'invalid email and/or password',
  //     //     password: 'invalid email and/or password',
  //     //   }
  //     //   console.log('errors', errors)
  //     // } finally {
  //     //   if (errors) {
  //     //     setErrors(errors)
  //     //     setSubmitting(false)
  //     //     // this.formTimeout = setTimeout(() => {
  //     //     //   resetForm()
  //     //     // }, 3000)
  //     //   }
  //     // }
  //   }

  render() {
    const { email, password, loading } = this.state
    //     const { auth: { error: authError } } = this.props

    //     if (loading) return <LoadingWithText />
    return (
      <Formik
        initialValues={{ email, password }}
        onSubmit={this.onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        render={(formikRenderProps) => {
          const {
            handleSubmit, isSubmitting, values: { email, password }, errors,
          } = formikRenderProps
          const isButtonDisable = !email || !password || isSubmitting
          return (
            <div className='sign-in-form-wrapper'>
              <div className='header'>Sign in</div>
              <Form onSubmit={handleSubmit}>

                <Field
                  className={classnames(errors.email && 'error')}
                  name='email'
                  placeholder='Email'
                  type='text'
                  disabled={isSubmitting}
                />
              

                <Field
                  className={classnames(errors.password && 'error')}
                  name='password'
                  placeholder='Password'
                  type='password'
                  disabled={isSubmitting}
                />
               

                <Button
                  className='sign-in-button'
                  type='submit'
                  color={isButtonDisable ? '#f7f7f7' : '#2ed180'}
                  fontColor={isButtonDisable ? '#c1cad1' : '#ffffff'}
                  text='Sign in'
                />
               
                {/* <div className='forgot-password'>
                  Forgot Password?
                </div> */}
                {/*                 {authError ? authError.message : null} */}
              </Form>
            </div>
          )
        }}
      />
    )
  }
}

// SignIn.propTypes = {
//   history: PropTypes.object,
//   signInTraveler: PropTypes.func,
// }


// NOTE: To reduce complexity of getting the login feature done
// I'm suggesting to not "validate" on change/blur
// but only when submitted, and show both fields error
// and it needs to clear the whole form
// so that we does not need to handle fringe case
// and eliminate feature creep that we do not need to handle

// const mapStateToProps = (state) => {
//   const { getAuth } = featureSelectors
//   return {
//     auth: getAuth(state),
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signInTraveler: (options) => {
//       return signInTravelerAction(dispatch, options)
//     },
//   }
// }

export default Signin
// export default connect(null,null)(withRouter(SignIn))
