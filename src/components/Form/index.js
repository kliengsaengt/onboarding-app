
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import classnames from 'classnames'
// import { connect } from 'react-redux'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik'
import SectionContent from './SectionContent'
import FieldContent from './FieldContent'
import { sections } from './data.js'
import './index.scss'

class EmployeeForm extends Component {
  componentDidMount() {
    //     const { getMissingDataAction } = this.props
    //     getMissingDataAction()
  }

  state = {
    // focusedInput: {
    //   passport_details: null,
    //   personal_details: null,
    // },
    // date: {
    //   passport_details: {
    //     passport_expire_date: null,
    //   },
    //   personal_details: {
    //     birthday: null,
    //   },
    // },
  }


  onSubmit = (values, actions) => {
    //     const { setTouched, setErrors, setSubmitting } = actions
    //     const requiredData = {}
    //     sections.map((sectionData, index) => {
    //       if (sectionData.isVisible) {
    //         requiredData[sectionData.sectionName] = {}
    //         sectionData.components.map((componentData, i) => {
    //           if (componentData.isVisible) {
    //             if (componentData.componentType === 'PhoneInput') {
    //               requiredData[sectionData.sectionName] = {
    //                 countryCode: true,
    //                 number: true,
    //               }
    //             } else {
    //               requiredData[sectionData.sectionName][componentData.name] = componentData.required
    //             }
    //           }
    //         })
    //       }
    //     })

    //     const touched = {}
    //     let errors = {}
    //     Object.keys(values).map((key) => {
    //       const section = values[key]
    //       const isRequied = requiredData[key]
    //       Object.keys(section).map((subKey) => {
    //         if (section[subKey] !== 'phone_number') {
    //           if (!section[subKey] && isRequied[subKey]) {
    //             errors = {
    //               ...errors, [key]: { ...errors[key], [subKey]: 'This is required' },
    //             }
    //             setErrors({ ...errors, [key]: { ...errors[key], [subKey]: 'This is required' } })
    //           }
    //         }
    //       })
    //     })


    let canSubmit = true
    //     Object.keys(errors).map((key) => {
    //       const section = errors[key]
    //       Object.keys(section).map((subKey) => {
    //         if (section[subKey] && section[subKey] !== 'phone_number') {
    //           if (section[subKey] !== '') {
    //             canSubmit = false
    //           }
    //         }
    //       })
    //     })

    if (canSubmit) {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(true)
      }, 100)
    }
  }

  // renderOption = (componentType, required, sectionData, defaultValue, placeholderText, country) => {
  //   const options = this.optionType(componentType, country)
  //   const checkData = required && sectionData
  //   return (
  //     checkData
  //       ? (
  //         defaultValue // require and have default value
  //           ? (
  //             <>
  //               <option disabled>{placeholderText}</option>
  //               {options.map(({ value, text }, index) => (<option key={index} value={value} defaultValue={defaultValue === value}>{text}</option>))}
  //             </>
  //           ) : ( // require but no default value, force user to select, if not select it will show validate error
  //             <>
  //               <option value='' disabled>{placeholderText}</option>
  //               {options.map(({ value, text }, index) => (<option key={index} value={value}>{text}</option>))}
  //             </>
  //           )
  //       ) : (
  //         defaultValue // not require and already have default value
  //           ? (
  //             <>
  //               <option disabled>{placeholderText}</option>
  //               <option value='No' defaultValue={defaultValue === ''}>No {placeholderText}</option>
  //               {options.map(({ value, text }, index) => (<option key={index} value={value} defaultValue={defaultValue === value}>{text}</option>))}
  //             </>
  //           ) : ( // not require and no default value
  //             <>
  //               <option value='' disabled>{placeholderText}</option>
  //               {options.map(({ value, text }, index) => (<option key={index} value={value}>{text}</option>))}
  //             </>
  //           )
  //       )
  //   )
  // }

  // optionType = (componentType, country) => {
  //   switch (componentType) {
  //     //       case 'CountrySelectBox':
  //     //         return getCountryList()
  //     //       case 'PhoneInput':
  //     //         return getPhoneCountryCodeList()
  //     case 'CitizenshipSelectBox':
  //       return [{ value: 'THA', text: 'Thai' }, { value: 'USA', text: 'American' }]
  //     //       case 'NationStateSelectBox':
  //     //         return getStateList(country)
  //     case 'TitleSelectBox':
  //       return [{ value: 'miss', text: 'Miss' }, { value: 'mr', text: 'Mr' }]
  //     case 'GenderSelectBox':
  //       return [{ value: 'female', text: 'Female' }, { value: 'male', text: 'Male' }]
  //     default:
  //   }
  // }

  //   handlePhoneInputNumberChange = (e, touched, errors, setFieldValue, setErrors, setTouched) => {
  //     const { value } = e.target
  //     setFieldValue('phone_number.number', value, false)
  //     const checkMustBeNumberOnly = !/^\d+$/.test(value) ? 'Please enter a phone number' : '' // if all values are not number (even 1 char), then show error!
  //     if (!value) {
  //       setTouched({ ...touched, phone_number: { ...touched.phone_number, number: true } })
  //       setErrors({ ...errors, phone_number: { ...errors.phone_number, number: 'This is required' } })
  //     } else if (checkMustBeNumberOnly) {
  //       setTouched({ ...touched, phone_number: { ...touched.phone_number, number: true } })
  //       setErrors({ ...errors, phone_number: { ...errors.phone_number, number: checkMustBeNumberOnly } })
  //     } else {
  //       this.checkMobileExist(value, touched, errors, setErrors, setTouched)
  //     }
  //   }


  handleTextInputChange = (e, formikProps, name) => {
    const { touched, errors } = formikProps
    const { value } = e.target
    formikProps.setFieldValue('firstname', e.target.value, false)
    //     if (!value && required) {
    //       formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
    //       formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'This is required' } })
    //       if (['firstname', 'middlename', 'lastname'].includes(name) && !value.match(/^[a-zA-Z]*$/g)) { // can only be a-z or A-Z
    //         formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
    //         formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'This must be characters only, cannot have number or space' } })
    //       }
    //       if (['address', 'address2', 'zip'].includes(name) && !value.match(/[^\s]+(\s+[^\s]+)*$/)) {
    //         formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
    //         formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'Cannot contain space front or back' } })
    //       }
    //     } else {
    //       formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: false } })
    //       formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: '' } })
    //       if (value && ['firstname', 'middlename', 'lastname'].includes(name) && !value.match(/^[a-zA-Z]*$/g)) { // can only be a-z or A-Z
    //         formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
    //         formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'This must be characters only, cannot have number or space' } })
    //       }
    //       if (['address', 'address2', 'zip'].includes(name) && !value.match(/^[^\s]+(\s+[^\s]+)*$/)) {
    //         formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
    //         formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'Cannot contain space front or back' } })
    //       }
    //     }
  }

  //   renderField = (dataField) => {
  //     const {
  //       componentType,
  //       values,
  //       touched,
  //       errors,
  //       sectionName,
  //       name,
  //       placeholderText,
  //       required,
  //       setFieldValue,
  //       formikProps,
  //     } = dataField
  //     const selectBoxList = ['CountrySelectBox', 'CitizenshipSelectBox', 'TitleSelectBox', 'GenderSelectBox']
  //     const checkValueExist = values[sectionName] && values[sectionName][name]
  //     const errorText = (touched[sectionName] && touched[sectionName][name]) && (errors[sectionName] && errors[sectionName][name]) && errors[sectionName][name]
  //     let dateValue
  //     //     if (componentType === 'DatePicker') {
  //     //       if (values[sectionName] && (values[sectionName][name] === '')) dateValue = values[sectionName][name]
  //     //       if (values[sectionName] && (values[sectionName][name] !== '')) dateValue = moment(values[sectionName][name])
  //     //     }

  //     return (
  //       <FieldContent
  //         shouldShowLegend={checkValueExist || (errorText)}
  //         shouldShowRedWarning={errorText}
  //         errorText={errorText}
  //         placeholderText={placeholderText}
  //       >

  //         {
  //           componentType === 'TextInput'
  //           && (
  //             <Field
  //               name={`${sectionName}.${name}`}
  //               render={({ field, form }) => {
  //                 return (
  //                   <input
  //                     {...field}
  //                     value={values[sectionName] && values[sectionName][name]}
  //                     placeholder={placeholderText}
  //                     onChange={(e) => this.handleTextInputChange(e, formikProps, sectionName, name, required)}
  //                   />
  //                 )
  //               }}
  //             />
  //           )
  //         }
  //         {/*         {
  //           selectBoxList.includes(componentType)
  //           && (
  //             <Field
  //               name={`${sectionName}.${name}`}
  //               value={values[sectionName] && values[sectionName][name]}
  //               render={({ field, form }) => {
  //                 return (
  //                   <select
  //                     name={`${sectionName}.${name}`}
  //                     value={values[sectionName] && values[sectionName][name]}
  //                     placeholder={placeholderText}
  //                     className={classnames('custom-select-field', { 'custom-selected': values[sectionName] && values[sectionName][name] })}
  //                     onChange={(e) => this.handleSelectOptionChange(e, formikProps, sectionName, name, required, componentType)}
  //                   >
  //                     {this.renderOption(componentType, required, values[sectionName], values[sectionName][name], placeholderText, null)}
  //                   </select>
  //                 )
  //               }}
  //             />
  //           )
  //         } */}
  //       </FieldContent>
  //     )
  //   }

  // handleSelectOptionChange = (e, formikProps, sectionName, name, required, componentType) => {
  //   const { value } = e.target
  //   const {
  //     errors, touched, setFieldValue, setTouched, setErrors,
  //   } = formikProps
  //   setFieldValue(`${sectionName}.${name}`, value, false)

  //   //     if (!value && required) {
  //   //       formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: true } })
  //   //       formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: 'This is required' } })
  //   //     } else {
  //   //       formikProps.setTouched({ ...touched, [sectionName]: { ...touched[sectionName], [name]: false } })
  //   //       formikProps.setErrors({ ...errors, [sectionName]: { ...errors[sectionName], [name]: '' } })
  //   //     }
  // }

  render() {
    const initialData = {}
    return (
      <div className='form-data-wrapper'>
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




                <div className='each-field-wrapper'>
                  <fieldset className={classnames('field-set')}>
                    <legend >test</legend>
                    <Field
                      name='title'
                      // name={`${sectionName}.${name}`}
                      // value={values[sectionName] && values[sectionName][name]}
                      render={({ field, form }) => {
                        return (
                          <select
                            //                     name={`${sectionName}.${name}`}
                            name='title'
                            value={values.title}
                            // placeholder={title}
                          // className={classnames('custom-select-field', { 'custom-selected': values[sectionName] && values[sectionName][name] })}
                          // onChange={(e) => this.handleSelectOptionChange(e, formikProps, sectionName, name, required, componentType)}
                          >
                            {/* {this.renderOption(componentType, required, values[sectionName], values[sectionName][name], placeholderText, null)} */}
                          </select>
                        )
                      }}
                    />
                  </fieldset>
                  <div className='error-message'>error</div>
                </div>






                  <fieldset className={classnames('field-set')}>
                    <legend >test</legend>
                    <Field
                      name='firstname'
                      render={({ field, form }) => {
                        return (
                          <input
                            {...field}
                            value={values.firstname}
                            // value={values[sectionName] && values[sectionName][name]}
                            placeholder='test'
                            onChange={(e) => this.handleTextInputChange(e, formikProps, name)}
                          />
                        )
                      }}
                    />
                  </fieldset>
                  <div className='error-message'>error</div>




                  <fieldset className={classnames('field-set')}>
                    <legend >test</legend>
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
                  <div className='error-message'>error</div>


                  <fieldset className={classnames('field-set')}>
                    <legend >test</legend>
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
                  <div className='error-message'>error</div>


                  <fieldset className={classnames('field-set')}>
                    <legend >test</legend>
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
                  <div className='error-message'>error</div>







              </form>
            )
          }}
        </Formik>
      </div >
    )
  }
}


export default EmployeeForm
                      // export default connect(mapStateToProps, mapDispatchToProps)(MissingData)
