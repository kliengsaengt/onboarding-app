import WarningIcon from '../../WarningIcon'
import React, { Component } from 'react'
import classnames from 'classnames'
import './index.scss'

const OneFieldContent = ({
  shouldShowLegend,
  shouldShowRedWarning,
  className,
  legendText,
  errorText,
  children,
}) => {
  return (
    <div className={classnames('one-field-content-wrapper', className)}>
      <fieldset className={classnames('field-set', { 'field-set-warn': shouldShowRedWarning })}>
        {shouldShowLegend && <legend className='legend-text'>{legendText}</legend>}
        <div className='children'>{children}</div>
      </fieldset>
      {errorText && <div className='error-message'>
    <WarningIcon className='icon' />
    {errorText}</div>}
    </div>
  )
}

export default OneFieldContent
