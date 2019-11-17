import React from 'react'
import PropTypes from 'prop-types'

const WarningIcon = ({ fill, ...props }) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <title>{'13D3EF01-7EBA-4E6A-82C1-FD9B84221A79@1.00x'}</title>
    <path
      d="M12 0C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12zm1.447 5.25l-.697 9h-1.5l-.697-9h2.894zM12 18.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      fillRule="nonzero"
      fill={fill}
    />
  </svg>
)

WarningIcon.defaultProps = {
  fill: '#E63E52',
}

export default WarningIcon
