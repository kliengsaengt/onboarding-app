import React, { Component } from 'react'
import EmployeeDetail from "./EmployeeDetail"
import { Link, Route } from 'react-router-dom'
import EmployeeName from '../../static/me.png'
import './index.scss'

class Employee extends Component {
  render() {
    const employees = [
      {
        name: 'Lisa Manoban',
        position: 'Junior Developer',
        email: 'lisa@bp.com',
        contact: '093048293'
      },
      {
        name: 'Jennie Kim',
        position: 'Junior React Developer',
        email: 'jennie.k@bp.com',
        contact: '093048293'
      },
      {
        name: 'Kim Woosik',
        position: 'Senior Node Developer',
        email: 'woosik@ps.com',
        contact: '093048293'
      },
      {
        name: 'Rosie Park',
        position: 'Chief Technology Officer',
        email: 'lisa@bp.com',
        contact: '093048293'
      },
      {
        name: 'Joen Jungkook',
        position: 'Senior tester',
        email: 'lisa@bp.com',
        contact: '093048293'
      },
      {
        name: 'RM Namjoon',
        position: 'Senior tester',
        email: 'lisa@bp.com',
        contact: '093048293'
      },
    ]
    const { match: { path } } = this.props
    return (
      <div className="employee-page-wrapper">
        <div className="employee-title">
          Directory (16)
        </div>
        <div className="list">
          <div className="search-area">
            <input type="text" />
            <div className="group-by">
              select by
            </div>
            <div className="select-by">
              select by
            </div>
          </div>

          <ul className="employee-list">
            {
              employees.map((employee, index) => (
                <li key={index} className="employee">
                  <img src={EmployeeName} />
                  <div className="employee-content">
                    <Link
                      to={`/employee/:id`}
                      className="name"
                    >
                      {employee.name}
                    </Link>
                    {/* <div className="name">
                      {employee.name}
                    </div> */}
                    <div className="position">
                      {employee.position}
                    </div>
                  </div>
                  <Route path={`/employee/id`} component={EmployeeDetail} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Employee