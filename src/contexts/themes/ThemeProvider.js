import React from 'react'
// theme(s)
import { themes } from 'contexts/themes/themes'
// theme(s) context
import { ThemeContext } from 'contexts/themes/ThemeContext'
// material button
import ThemeButton from 'components/button'

class ThemeProvider extends React.Component {
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        <ThemeButton onClick={this.toggleTheme} />
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
