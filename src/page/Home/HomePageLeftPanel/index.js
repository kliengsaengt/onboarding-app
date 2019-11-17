import React, { Component } from 'react'
import Me from '../../../static/me.png'

const HomePageLeftPanel = () => {
  const listWhoOut = [
    {
      name: 'Nobody requested time off today.', date: 'Today',
    },
    {
      name: 'Elle requested time off ', date: '3 Nov 2019',
    },
    {
      name: 'Jennie requested time off ', date: '2 Nov 2019',
    },
    {
      name: 'Knot requested time off ', date: '27 Oct 2019',
    },
  ]
  const list = [
    {
      name: 'Lisa 3rd aniversary', date: 'Today',
    },
    {
      name: 'Jungkook 2rd aniversary', date: 'Today',
    },
    {
      name: 'Jennie birthday', date: 'Today',
    },
    {
      name: 'Nate Nutty', date: 'Today',
    },
    {
      name: 'Sutee Mena', date: '5th aniversary',
    }
  ]
  return (
    <div className="home-page-left-panel">
      <div className="home-info-wrapper">
        <div className="my-profile-title-on-home-page">
          <img src={Me} className="my-picture" />
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
                listWhoOut.map((person) => {
                  return (
                    <div className="who-is-out">
                      <div>
                        {person.date}
                      </div>
                      <div>{person.name}</div>
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
                list.map((person) => {
                  return (
                    <div className="celebration-name">
                      <img className="image" src={Me}></img>
                      <span>{person.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="home-company-info-wrapper">
        <div>COMPANY LINKS</div>
        <div><a href='#'>website</a></div>
        <div><a href='#'>LinkIn</a></div>
        <div><a href='#'>Facebook</a></div>
      </div>
    </div>
  )
}

export default HomePageLeftPanel