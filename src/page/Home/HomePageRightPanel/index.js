import React, { Component } from 'react'
import Me from '../../../static/me.png'

const HomePageRightPanel = ({
  onClick,
}) => {
  return (
    <div className="home-page-right-panel">
      <div className="what-happen-board">
        <div className="title">
          WHAT'S HAPPENING AT BP (THAILAND) CO., LTD
        <span className="anoucement"> Annoucements</span>
        </div>
        <div className="content">
          <div>
            <span>- Take a few minutes to complete your Self Assessment. </span>
            <a href='#'>Click</a>
          </div>
          <div>
            <span>- NewYear Company annoucement 2020! </span>
            <a href='#'>Click</a>
          </div>
          <div>
            <span>- Don't miss free beer party this Friday </span>
            <a href='#'>Click</a>
          </div>
        </div>
      </div>
      <div className="welcome-board">
        <div className="title">Welcome to BP Company</div>
        <div className="content">
          <div className="welcome-image">
            <img src={Me} className="my-picture" />
          </div>
          <div className="text">
            Welcome Jennie Kim, Backend Developer in Engineering Department
    Bangkok·Started Tuesday, October 15th
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageRightPanel