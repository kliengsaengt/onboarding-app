// import {
//       WarningIcon,
//     } from 'booking-engine/components/common/Icons'
import React, { Component } from 'react'
import classnames from 'classnames'

const FieldContent = ({
  shouldShowLegend,
  shouldShowRedWarning,
  errorText,
  className,
  placeholderText,
  children,
}) => {
  return (
    <div className='each-field-wrapper'>
      <fieldset className={classnames('field-set', { 'field-set-warn': shouldShowRedWarning }, className)}>
        {shouldShowLegend && <legend className={classnames({ 'legend-text': shouldShowRedWarning })}>{placeholderText}</legend>}
        {children}
      </fieldset>
      {errorText && <div className='error-message'>{errorText}</div>}
    </div>
  )
}

export default FieldContent
