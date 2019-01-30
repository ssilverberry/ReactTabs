import React from 'react'
// theme provider
import { ThemeContext } from 'contexts/themes/ThemeContext'

const withThemeConsumer = WrappedComponent => {
  return class EnhancedComponent extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>{state => <WrappedComponent {...this.props} context={state} />}</ThemeContext.Consumer>
      )
    }
  }
}

export default withThemeConsumer
