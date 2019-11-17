import React, { Component } from 'react'
import EmployeeName from '../../static/me.png'
import { employees } from './data.js'
import Dropdown from '../../components/Select'
import './index.scss'

class Employee extends Component {
  state = {
    searchBy: 'name',
    employees: employees
  }

  search = (e) => {
    const value = e.target.value
    const { searchBy } = this.state

    if (value) {
      this.setState({ employees: this.state.employees.filter(person => person[searchBy].includes(value)) })
    } else {
      this.setState({ employees })
    }
  }

  setSearchBy = (value) => {
    this.setState({ searchBy: value })
  }

  render() {
    const { employees } = this.state
    const { match: { path } } = this.props
    return (
      <div className="employee-page-wrapper">
        <div className="employee-title">
          Directory (16)
        </div>
        <div className="list">
          <div className="search-area">
            <input
              type="text"
              placeholder='Search by name'
              onChange={this.search}
              autoFocus />
            <div className="group-by">Group by</div>
            <Dropdown getSearchBy={this.setSearchBy} />
          </div>
          <ul className="employee-list">
            {
              employees.map((employee, index) => (
                <li key={index} className="employee">
                  <img src={EmployeeName} className="employee-image" />
                  <div className="employee-content">
                    <div className="name">{employee.name}</div>
                    <div className="position">position: {employee.position}</div>
                    <div className="location">branch: {employee.branch}</div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Employee