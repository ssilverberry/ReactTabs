import React from 'react'

const withAccordion = WrappedComponent => {
  return class EnhancedComponent extends React.Component {
    state = {
      activeAccordion: ''
    }

    handleAccordionClick = activeAccordion => {
      this.setState(state => ({
        activeAccordion: state.activeAccordion !== activeAccordion ? activeAccordion : ''
      }))
    }

    render() {
      const { activeAccordion } = this.state
      return (
        <WrappedComponent {...this.props} handleActiveAcc={this.handleAccordionClick} activeAcc={activeAccordion} />
      )
    }
  }
}

export default withAccordion
