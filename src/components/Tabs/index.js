import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'

class TabsContainer extends Component {
  static propTypes = {
    selected: PropTypes.number,
    mode: PropTypes.oneOf(['default', 'underline']),
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    tabWidth: PropTypes.number,
    hoverColor: PropTypes.string,
    activeColor: PropTypes.string,
    handlerClickTab: PropTypes.func
  }

  static defaultProps = {
    selected: 0,
    mode: 'default',
    tabWidth: 100,
    hoverColor: '$border_color',
    activeColor: '#ff1654',
  }

  state = {
    selected: this.props.selected,
    mode: this.props.mode,
    ready: true,
  }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.selected !== this.props.selected) {
//       this.setState({
//         selected: nextProps.selected
//       })
//     }
//   }

  componentDidUpdate() {
    const { ready } = this.state
    if (!ready) {
      setTimeout(() => {
        this.setState({ ready: true })
      }, 200)
    }
  }

// shouldComponentUpdate(nextProps, nextState) {
//     return this.props !== nextProps || this.state !== nextState;
//   }


  getSummaryWidth() {
    const { tabWidth, children } = this.props
    const countItem = React.Children.count(children)
    const width = `${tabWidth * countItem}px`
    return width
  }

  
  handleClick(index) {
    if (this.state.ready) {
      const { handlerClickTab } = this.props
      this.setState({
        selected: index,
        ready: false,
      })
      if (handlerClickTab) {
        handlerClickTab(index)
      }
    }
  }

  labels(child, index) {
    const { selected, mode } = this.state
    const { hoverColor, activeColor } = this.props
    const { label, onClick } = child.props
    const activeClass = `active-${mode}`
    const hoverClass = `hover-${mode}`
    const { tabWidth } = this.props
    const style = {
      width: tabWidth,
      '--hoverColor': hoverColor,
      '--activeColor': activeColor,
    }
    return (
      <div
        style={style}
        key={index}
        className={classNames(
          'tabs_title_li',
          { [activeClass]: selected === index },
          hoverClass,
        )}
        onClick={() => {
          this.handleClick(index)
          onClick()
        }}
      >
        <span>
          {label}
        </span>
      </div>
    )
  }

  _renderSlide() {
    const { mode, selected } = this.state
    const { tabWidth } = this.props
    if (mode === 'default') {
      return null
    }
    console.log(selected, 555555)
    const style = {
      transform: `translateX(${100 * selected}%)`,
      width: tabWidth,
    }
    return (
      <div className='underline-wrapper'>
        <div className='title-underline' style={style} />
      </div>
    )
  }

  _renderTitles() {
    const { children } = this.props
    return (
      <div className="tabs_title_ul" style={{ width: this.getSummaryWidth() }}>
        {this._renderSlide()}
        {children.map((value, index) => this.labels(value, index))}
        {/* what */}
      </div>
    )
  }

  _renderContent() {
    const { children } = this.props
    const { selected } = this.state
    return (
      <div className="tabs_content">
        {children[selected]}
      </div>
    )
  }

  render() {
    const { ready } = this.state
    return (
      <div className="bo-tabs">
        {this._renderTitles()}
        {/* // render picked one */}
        {ready ? this._renderContent() : null}  
      </div>
    )
  }
}

export default TabsContainer
