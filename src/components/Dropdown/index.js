import { Component } from 'react'
import classnames from 'classnames'

class Dropdown extends Component {
  state = {
    isShowList: false,
    selected: this.props.value,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { isShowList } = this.state
      if (isShowList) {
        this.setState({
          isShowList: false
        })
      }
    }
  }

  select = (item) => {
    const { handleSelect } = this.props
    this.setState({
      selected: item,
      isShowList: false,
    })
    handleSelect(item)
  }

  showList = () => {
    this.setState({
      isShowList: !this.state.isShowList,
    })
  }

  render() {
    const { isShowList, selected } = this.state
    const { list, className, value, isDisabled } = this.props
    return (
      <div className={classnames('dropdown-wrapper', { 'is-disabled': isDisabled }, className)} ref={(node) => { this.wrapperRef = node }}>
        <div className='selected-section' onClick={!isDisabled ? this.showList : undefined}>
          {value}
        </div>
        {
          isShowList
          && (
            <div className='list-section'>
              {
                list.map((item, index) => (
                  <div
                    key={index}
                    className='item'
                    onClick={() => this.select(item)}
                  >
                    <div className='item-text'>{item}</div>
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

export default Dropdown

