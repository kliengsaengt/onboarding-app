
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// import Personal from './Personal'
// import Job from './Job'
// import Emergency from './Emergency'
// import Performance from './Performance'
// import Documents from './Documents'
// import Benefits from './Benefits'
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
          {/* <img src={Me} /> */}
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
    { name: 'Job', id: 'job' },
    { name: 'Emergency', id: 'emergency' },
    { name: 'Documents', id: 'documents' },
    { name: 'Benefits', id: 'benefits' },
    { name: 'Performace', id: 'performace' },
  ]
  const path = props.match.path
  return (
    <div className="my-info-right">
      <Tabs mode="underline" selected={1}>
        {/* <Tab label='Personal'>

          <Personal />
        </Tab>
        <Tab label='Job' >

          <Job />
        </Tab>
        <Tab label='Emergency' >

          <Emergency />
        </Tab>
        <Tab label='Documents' >

          <Documents />
        </Tab>
        <Tab label='Benefits' >

          <Benefits />
        </Tab>
        <Tab label='Performace' >

          <Performance />
        </Tab> */}

        {
          topics.map(({ name, id }) => {
            // console.log('id' , id, 8888)
            return (
              <Tab label={name} >
                
                <Section name={name} />
              </Tab>
            )
          })
        }
      </Tabs>

      {/* <Route path={`/myinfo/personal`} component={Personal} />
      <Route path={`/myinfo/job`} component={Job} />
      <Route path={`/myinfo/emergency`} component={Emergency} />
      <Route path={`/myinfo/documents`} component={Documents} />
      <Route path={`/myinfo/benefits`} component={Benefits} />
      <Route path={`/myinfo/performance`} component={Performance} /> */}


    </div>
  )
}

export default MyInfo