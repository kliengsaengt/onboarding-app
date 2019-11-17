import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './static/logo.png'
import Signup from './page/Signup'
import Signin from './page/Signin'
import { ModalBody, Modal, ModalHeader } from 'reactstrap'
import './Nav.scss'

class Nav extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  toggleLogin = () => {
    this.setState({
      isOpenLogin: !this.state.isOpenLogin,
    })
  }

  render() {
    const { isOpen, isOpenLogin } = this.state
    return (
      <div className="nav-bar-wrapper">
        <div className="header">
          <div className="logo">
            <img src={Logo} className="logo-image" />
          </div>
          <div className="profile-maker">
            <div className="profile">
              <Link to='/sign-up' >Signup</Link>
            </div>
            <div className="profile">
              <Link to='/sign-in' >Signin</Link>
            </div>
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
            {/* <Link to="/file">
              <li className="nav-item">Files</li>
            </Link> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav