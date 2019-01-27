import React, { Component, Fragment } from 'react'
// prop types
import PropTypes from 'prop-types'

class Tabs extends Component {
  static propTypes = {
    defaultTab: PropTypes.string.isRequired,
    defaultTabData: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  static defaultProps = {
    defaultTab: 'LOREM',
    defaultTabData: [{ title: 'lorem', index: 'LOREM' }]
  }

  state = {
    activeTab: this.props.defaultTab
  }

  handleClick = activeTab => {
    this.setState({ activeTab })
  }

  render() {
    const { children, defaultTabData } = this.props
    const { activeTab } = this.state

    return (
      <Fragment>
        {children({
          active: activeTab,
          handleActive: this.handleClick,
          tabData: defaultTabData
        })}
      </Fragment>
    )
  }
}

export default Tabs
