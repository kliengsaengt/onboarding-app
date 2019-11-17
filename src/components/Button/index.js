// import Spinner from '../Spinner'
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
const Button = ({
  color,
  text,
  className,
  fontColor,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={classnames('button-wrapper', className)}
      style={{ backgroundColor: color, color: fontColor }}
      {...props}
    >
    {text}
{/*       {isLoading ? <Spinner /> : text} */}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  isDisable: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
}

Button.defaultProps = {
  color: '#009aef',
}

export default Button


