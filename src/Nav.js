import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './static/logo.png'
import './Nav.scss'

const Nav = () => {

  return (
    <div className="nav-bar-wrapper">

      <div className="header">
        <div className="logo">
          <img src={Logo} className="logo-image"/>
          </div>
          <div className="profile">
            profile
          </div> 
      </div>


      <div className="menu-wrapper">
        <ul>
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/myinfo">
            <li className="nav-item">My Info</li>
          </Link>
          <Link to="/employee">
            <li className="nav-item">Employees</li>
          </Link>
          <Link to="/file">
            <li className="nav-item">Files</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav