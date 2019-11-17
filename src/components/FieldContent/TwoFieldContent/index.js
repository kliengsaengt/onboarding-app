import WarningIcon from '../../WarningIcon'
import React, { Component } from 'react'
import classnames from 'classnames'
import './index.scss'

const TwoFieldContent = ({
  shouldShowSecondRedWarning,
  shouldShowFirstRedWarning,
  shouldShowFirstLegend,
  shouldShowSecondLegend,
  className,
  firstLegendText,
  secondLegendText,
  firstField,
  secondField,
  errorText,
}) => {
  return (
    <div className={classnames('two-field-content-wrapper', className)}>
      <div className='fields-content'>
        <fieldset className={classnames('field-set', { 'field-set-warn': shouldShowFirstRedWarning })}>
          {shouldShowFirstLegend && <legend className='legend-text' >{firstLegendText}</legend>}
          <div className='children'>{firstField}</div>
        </fieldset>
        <fieldset className={classnames('field-set', { 'field-set-warn': shouldShowSecondRedWarning })}>
          {shouldShowSecondLegend && <legend className='legend-text' >{secondLegendText}</legend>}
          <div className='children'>{secondField}</div>
        </fieldset>
      </div>
      {errorText && <div className='error-message'><WarningIcon className='icon' />{errorText}</div>}
    </div>
  )
}

export default TwoFieldContent
