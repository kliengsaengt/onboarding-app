import React, { Component } from 'react'
import { Field, Formik } from 'formik'
import EmployeeForm from '../../../components/Form'
import classnames from 'classnames'
import './index.scss'

class Emergency extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    console.log('submttt')
  }

  render() {
    return (
      <div className="emergency-form">
        <div>
          <h2>Emergency Contact</h2> 
          <Formik
            validateOnBlur={false}
            ref={(formik) => { this.formik = formik }}
            initialValues={{
              firstname: '',
            }}
            onSubmit={(values, actions) => this.onSubmit(values, actions)}
          >
            {(formikProps) => {
              const {
                values, touched, errors, setFieldValue, setTouched, setErrors, handleSubmit,
              } = formikProps
              return (
                <form onSubmit={handleSubmit}>
                  <fieldset className={classnames('field-set')}>
                    <legend >Contact Person</legend>
                    <Field
                      name='lastname'
                      render={({ field, form }) => {
                        return (
                          <input
                            {...field}
                            value={values.lastname}
                            // value={values[sectionName] && values[sectionName][name]}
                            placeholder='test'
                            onChange={(e) => this.handleTextInputChange(e, formikProps, name)}
                          />
                        )
                      }}
                    />
                  </fieldset>
                  <fieldset className={classnames('field-set')}>
                    <legend >Tel.</legend>
                    <Field
                      name='lastname'
                      render={({ field, form }) => {
                        return (
                          <input
                            {...field}
                            value={values.lastname}
                            // value={values[sectionName] && values[sectionName][name]}
                            placeholder='test'
                            onChange={(e) => this.handleTextInputChange(e, formikProps, name)}
                          />
                        )
                      }}
                    />
                  </fieldset>
                 
                </form>
              )
            }}
          </Formik>
        </div>
      </div>
    )
  }
}

export default Emergency