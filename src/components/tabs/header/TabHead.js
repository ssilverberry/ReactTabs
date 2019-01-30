// react
import React from 'react'
// style
import { Title, TabNav } from 'styles/tabs'
// prop types
import PropTypes from 'prop-types'
// theme context hoc
import withThemeContext from 'hoc/withThemeContext'

const TabHead = ({ tabData, handleActive, active, context }) => {
  return (
    <TabNav background={context.theme.background} color={context.theme.color}>
      {tabData.map(({ title, index }) => (
        <Title
          key={index}
          onClick={() => handleActive(index)}
          tabindex={index}
          primary={active === index}
          background={context.theme.background}
          color={context.theme.color}
        >
          {title}
        </Title>
      ))}
    </TabNav>
  )
}

TabHead.propTypes = {
  tabData: PropTypes.array.isRequired,
  handleActive: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
}

export default withThemeContext(TabHead)
