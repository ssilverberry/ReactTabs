import React from 'react'
// theme(s) context
import { themes } from 'contexts/themes/themes'

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
})
