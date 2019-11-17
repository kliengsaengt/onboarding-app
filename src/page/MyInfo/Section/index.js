import React, { Component } from 'react'
import Personal from '../Personal'
// import Job from '../Job'
import Emergency from '../Emergency'
// import Performance from '../Performance'
import Documents from '../Documents'
import Benefits from '../Benefits'
import './index.scss'

class Section extends Component {
  renderContent = (topic) => {
    switch (topic) {
      case 'Personal': return <Personal />
      // case 'Job': return <Job />
      case 'Emergency': return <Emergency />
      case 'Documents': return <Documents />
      case 'Benefits': return <Benefits />
      // case 'Performance': return <Performance />
      default: return
    }
  }

  render() {
    // const topics = [
    //     { name: 'Personal', id: 'personal' },
    //     { name: 'Job', id: 'job' }
    // ]

    // const { match } = this.props
    // const pickedTopic = topics.find(x => x.id === match.params.topicId)
    const { name } = this.props
    return (
      <div className="my-info-template">
        <h2 className="my-info-title">
          {name}
        </h2>
        {this.renderContent(name)}
      </div>
    )
  }
}
export default Section 