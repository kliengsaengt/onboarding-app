/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { searchAirportArea } from 'booking-engine/store/features/flight-preference'
// import {
//   DepartActiveIcon,
//   DepartInActiveIcon,
//   AirlineActiveIcon,
//   ClearActiveIcon,
//   CityActiveIcon,
// } from 'booking-engine/components/common/Icons'
import './index.scss'
import { SSL_OP_NO_TLSv1_1 } from 'constants';

class Dropdown extends Component {
  state = {
    selected: 'name',
    isShowList: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { isShowList } = this.state
      if (isShowList) {
        this.setState({
          isShowList: false
        })
      }
    }
  }

  select = (item) => {
    this.setState({
      selected: item,
      isShowList: false,
    })
    this.props.getSearchBy(item)
  }

  toggle = () => {
    this.setState({ isShowList: true, })
  }


  render() {
    const { isShowList, selected } = this.state
    const mock = [{ name: 'name' }, { name: 'position' }, { name: 'branch' }]
    return (
      <div className='dropdown-wrapper' ref={(node) => { this.wrapperRef = node }}>
        <div className='input-section-wrapper'  onClick={this.toggle}>
        {selected}
        </div>

        {
          isShowList
          && (
            <div className='list-section-wrapper'>
              {
                mock.map(({ name }, index) => (
                  <div
                    key={index}
                    className='item'
                    onClick={() => this.select(name)}
                  >
                    <div className='item-text'>
                      {name}
                    </div>
                  </div>
                ))
              }

            </div>
          )
        }
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(FlightPreference)
export default Dropdown
