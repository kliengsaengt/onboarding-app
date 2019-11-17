import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './page/Home'
import MyInfo from './page/MyInfo'
import Employee from './page/Employee'
import File from './page/File'
import Signup from './page/Signup'
import Signin from './page/Signin'
import './App.scss'

class App extends Component {
  render() {
    // switch เพื่อเวลาลงไปหาเรื่อยๆแล้วจะหยุดได้ ถ้าไม่ใส่จะได้ทั้ง home และ myinfo เลย
    // exact หาเป๊ะๆ เลย 
    return (
      <Router>
        <div className="app-wrapper">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/sign-in" component={Signin} />
            <Route path='/myinfo' component={MyInfo} />
            <Route path='/employee' component={Employee} />
            {/* <Route path='/file' component={File} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App