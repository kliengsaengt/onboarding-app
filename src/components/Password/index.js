import React, { Component } from 'react'
import WarningIcon from '../WarningIcon'
import classnames from 'classnames'
import './index.scss'
// import SelectedIcon from 'booking-engine/components/common/Icons/SelectedIcon'
// import CorrectIcon from 'booking-engine/components/common/Icons/CorrectIcon.svg'
// import InCorrectIcon from 'booking-engine/components/common/Icons/InCorrectIcon.svg'

class PasswordStrength extends Component {
  state = {
    openReasons: false,
  }

  toggleReason = () => {
    this.setState({ openReasons: !this.state.openReasons })
  }

  getPasswordStrengthLabel = (value) => {
    switch (value) {
      case 0:
        return 'Very weak'
      case 1:
        return 'Weak'
      case 2:
        return 'Acceptable'
      case 3:
        return 'Good'
      case 4:
        return 'Strong'
      default:
        return
    }
  }

  render() {
    const { score, passwordSuggestions, currentSuggestions } = this.props
    const { openReasons } = this.state

    const listColor = ['#e63e52', '#f5a623', '#727c8a', '#0ac0dd', '#2ed180']
    const strengthLabel = this.getPasswordStrengthLabel(score)
    return (
      passwordSuggestions.length > 0
      && (
        <div className='password-strength'>
          <progress
            className={classnames('progress-bar',
              { 'very-weak': score === 0 },
              { 'weak': score === 1 },
              { 'acceptable': score === 2 },
              { 'good': score === 3 },
              { 'strong': score === 4 }
            )}
            value={score + 1}
            max='5'
          />
<div className="strength-level">{strengthLabel}</div>
        
{/*           {
            ((strengthLabel !== 'Strong') && (passwordSuggestions.length > 0) && openReasons)
            && (
              <div className='password-reasons'>
                {
                  (strengthLabel !== 'Strong')
                  && passwordSuggestions.map((reason, index) => {
                    const isStillRed = currentSuggestions.includes(reason)
                    return (
                      <div key={index} className='password-reason'>
                        <img src={isStillRed ? InCorrectIcon : CorrectIcon} width='10px' className='reason-img' />
                        <span className={classnames('reason-red-text', { 'reason-green-text': !isStillRed })}>{reason}</span>
                      </div>
                    )
                  })
                }
              </div>
            )
          } */}
        </div>
      )
    )
  }
}

export default PasswordStrength

