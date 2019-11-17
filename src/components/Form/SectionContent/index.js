import React, { Component } from 'react'
const SectionContent = ({ sectionTitle, children }) => {
  return (
    <div className='section'>
      <div className='title'>{sectionTitle}</div>
      <div className='form-in-each-section'>
        {children}
      </div>
    </div>
  )
}

export default SectionContent
