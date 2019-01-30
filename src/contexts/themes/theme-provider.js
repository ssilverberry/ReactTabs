import React from 'react'
// theme(s) context
import { themes } from 'contexts/themes/themes'
// material button
import ThemeButton from 'components/button'

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
})

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
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
