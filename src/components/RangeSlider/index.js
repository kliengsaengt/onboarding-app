
    
    /* eslint-disable class-methods-use-this */
    import React, { Component } from 'react'
    import Button from '../Button'
    
    class RangeSlider extends Component {
      componentDidMount() {
        this.getValue()
      }
    
      state = {
        depart: {
          val1: '0',
          val2: '24',
          text: 'Anytime',
        },
        arrival: {
          val1: '0',
          val2: '24',
          time: 'Anytime',
        },
        currentMode: 'depart',
      }
    
      setType = (type) => {
        this.setState({ currentMode: type }, () => this.getValue())
      }
    
      getValue = () => {
        const { currentMode } = this.state
        const slides = document.getElementsByTagName('input')
        let slide1 = slides[0].value
        let slide2 = slides[1].value
        this.setState({
          [currentMode]: {
            val1: slide1,
            val2: slide2,
            text: `${this.getTime(slide1)} - ${this.getTime(slide2)}`,
          },
        })
      }
    
      calculateTime = (val1, val2) => {
        if (val1 > val2) {
          this.setState({ timeText: `${this.getTime(val1)} - ${this.getTime(val2)}` })
        } else {
          this.setState({ timeText: `${this.getTime(val2)} - ${this.getTime(val1)}` })
        }
      }
    
      getTime = (valueText) => {
        const value = parseInt(valueText)
        if (value >= 0 && value <= 11) {
          return `${value}am`
          // eslint-disable-next-line no-else-return
        } else if (value > 12 && value <= 24) {
          return `${value - 12}pm`
        } else if (value === 12) {
          return `12pm`
        }
      }
    
      render() {
        const { currentMode, depart, arrival, timeText } = this.state
        const { title } = this.props
        const finalValue = currentMode === 'depart' ? depart : arrival
        let text
    
        const time1 = this.getTime(finalValue.val1)
        const time2 = this.getTime(finalValue.val2)
    
        const a = parseInt(finalValue.val1)
        const b = parseInt(finalValue.val2)
        if (a < b) {
          text = `${time1} - ${time2}`
          if (a === 0 && b !== 24) {
            text = `12am - ${time2}`
          }
    
          if (a !== 0 && b === 24) {
            text = `${time1} - 12am`
          }
    
          if (text === '0am - 12pm') {
            text = 'Anytime'
          }
        } else if (a > b) {
          text = `${time2} - ${time1}`
    
          if (a === 0 && b !== 24) {
            text = `12am - ${time2}`
          }
    
          if (a !== 0 && b === 24) {
            text = `${time1} - 12am`
          }
    
          if (text === '0am - 12pm') {
            text = 'Anytime'
          }
        } else {
          text = time1
        }
        return (
          <div className='range-slider-wrapper'>
            <div className='title'>{title}</div>
            <div>
              <Button
                className='button first-button'
                text='Depart BKK'
                color={currentMode === 'depart' ? '#009aef' : '#f7f7f7'}
                fontColor={currentMode === 'depart' ? '#ffffff' : '#009aef'}
                onClick={() => this.setType('depart')}
              />
              <Button
                className='button'
                text='Arrival BKK'
                color={currentMode === 'arrival' ? '#009aef' : '#f7f7f7'}
                fontColor={currentMode === 'arrival' ? '#ffffff' : '#009aef'}
                onClick={() => this.setType('arrival')}
              />
              <div className='range-values'>{text}</div>
            </div>
            <div className='slider'>
              <section className="range-slider">
                <input
                  id='slide-1'
                  value={finalValue.val1}
                  min='0'
                  max='24'
                  step='1'
                  type="range"
                  onInput={this.getValue}
                />
                <input
                  id='slide-2'
                  value={finalValue.val2}
                  min='0'
                  max='24'
                  step='1'
                  type="range"
                  onInput={this.getValue}
                />
              </section>
            </div>
          </div>
        )
      }
    }
    
    export default RangeSlider
    