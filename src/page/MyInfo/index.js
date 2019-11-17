
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Section from './Section'
import Me from '../../static/me.png'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tab'
import './index.scss'

class MyInfo extends Component {
  render() {
    return (
      <div className="my-info-page-wrapper">
        <div className="my-info-page-title">
          Lalisa (Lisa) Manoban
        </div>
        <div className="my-info-page-content-wrapper">
          <div className="my-info-left">
            <img className="me" src={Me} />
            <div className="my-contact">
              +66(3)90-242-3252
            </div>
            <div className="my-contact">
              lisa@bp.com
            </div>
            <div className="my-data">
              <div className="title">
                HireDate
              </div>
              May 15, 2019
            </div>
            <div className="my-data">
              <div className="title">
                HireDate
              </div>
              Yang Shin
            </div>
          </div>
          <MyInfoRight {...this.props} />
        </div>
      </div>
    )
  }
}


const MyInfoRight = (props) => {

  const topics = [
    { name: 'Personal', id: 'personal' },
    // { name: 'Job', id: 'job' },
    { name: 'Emergency', id: 'emergency' },
    { name: 'Documents', id: 'documents' },
    { name: 'Benefits', id: 'benefits' },
    // { name: 'Performace', id: 'performace' },
  ]
  const path = props.match.path
  return (
    <div className="my-info-right">
      <Tabs mode="underline" selected={0}>
        {
          topics.map(({ name, id }) => {
            return (
              <Tab label={name}>
                <Section name={name} />
              </Tab>
            )
          })
        }
      </Tabs>
    </div>
  )
}

export default MyInfo