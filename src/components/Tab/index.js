import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

const Tab = ({ id, className, children, onClick, ...props }) => {
  return (
    <div
      {...props}
      id={`tab-${id}`}
      className={classnames('bo-tab-content', className)}
    >
      {children}
    </div>
  )
}

Tab.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Tab.defaultProps = {
  id: '',
  className: '',
  children: '',
  onClick: () => { },
}

export default Tab
