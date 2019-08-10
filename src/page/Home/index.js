import React, { Component } from 'react'
import Logo from '../../static/logo.png'
import Me from '../../static/me.png'
import './index.scss'

class Home extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
        <div className="home-title">
          Home
        </div>
        <div className="home-content-wrapper">
        
        <HomePageLeftPanel/>

        <HomePageRightPanel/>
        </div>

      </div>
    )
  }
}

const HomePageLeftPanel = () => {
  const listWhotOut =[1,2,3,6]
  return (
    <div className="home-page-left-panel">


    <div className="home-info-wrapper">


      <div className="my-profile-title-on-home-page">

      <img src={Me} className="my-picture"/> 
      <span className="name">
        Lalisa Manoban
        </span>
      </div>


      <div className="my-profile-content-on-home-page">
        <div className="request-time-off">
          <div className="button">
            Request Time Off
            </div>
          </div>
        <div className="who-is-out-wrapper">
          <div className="who-is-out">
            Who's Out
          </div>
          <div className="list-person">
            {
              listWhotOut.map((person) => {
                return (
                  <div className="who-is-out">
                    <div>
                      Today
                      </div>
                      <div>Nobody requested time off today.</div>
                  </div>
                )
              })
            }
          </div>
              </div>
        <div className="celebration">
          Celebrations
          
          <div>
            {
              listWhotOut.map((person) => {
                return (
                  <div className="celebration-name">
                     <img className="image" src={Me}></img>
                     <span>Jennie Kim</span>
                     <span>Aug 1 - 3rd Anniversary
</span>
                    </div>
                )
              })
            }
           
          </div>
                    </div>
        <div>

        </div>
      </div>
    </div>



    <div className="home-company-info-wrapper">
      <div>COMPANY LINKS</div>
      <div>
        <a>
          website
                        </a>
        <a>LinkIn</a>
        <a>Facebook</a>

      </div>
    </div>

  </div>

  )
}
const HomePageRightPanel = () => {
  return (
    <div className="home-page-right-panel">

        <div className="what-happen-board">
          <div className="title">
            WHAT'S HAPPENING AT BP (THAILAND) CO., LTD
          <span className="anoucement">Annoucements</span>
          </div>

          <div className="content">

              What is new!
          </div>

        </div>

        <div className="welcome-board">
          <div className="title">Welcome to BP</div>
        
          <div className="content">

        welcome
        </div>
        </div>  
    </div>
  )
}
export default Home 