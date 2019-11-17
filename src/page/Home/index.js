import React, { Component } from 'react'
import {connect} from 'react-redux'
import Logo from '../../static/logo.png'
import {
  increase,
  asyncApiCall,
  tempAction,
} from '../../redux/modules/AccountInfo/action'
import Me from '../../static/me.png'
import { ReactComponent as Heart } from '../../static/heart.svg'
import HeartCom from '../../static/HeartCom'
import HomePageLeftPanel from './HomePageLeftPanel'
import HomePageRightPanel from './HomePageRightPanel'
import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
        {/* <div className="home-title">Home</div> */}
        <div className="home-content-wrapper">
        <HomePageLeftPanel />
        <HomePageRightPanel onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Home
