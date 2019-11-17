import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
// import AttachIconActive from '../../../../static/images/AttachIcon/active.svg'
// import AttachIconDisabled from '../../../../static/images/AttachIcon/disabled.svg'
import './index.scss'

const AttachFileButton = ({ isDisabled, ...props }) => {
  return (
    <div className={classnames('attach-file-button', { disabled: isDisabled })} {...props}>
      {/* <img src={isDisabled ? AttachIconDisabled : AttachIconActive} className="attach-icon" /> */}
      <span className="attach-text">
        Attach file
      </span>
    </div>
  )
}

AttachFileButton.propTypes = {
  isDisabled: PropTypes.bool,
}

AttachFileButton.defaultProps = {
  isDisabled: false,
}

export default AttachFileButton
