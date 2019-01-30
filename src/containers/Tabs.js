// react hook
import { useState } from 'react'
// prop types
import PropTypes from 'prop-types'

const useTabs = defaultTab => {
  const [activeTab, handleActive] = useState(defaultTab)
  const changeActive = activeTab => {
    handleActive(activeTab)
  }
  return [activeTab, changeActive]
}

useTabs.propTypes = {
  defaultTab: PropTypes.string.isRequired
}
export default useTabs
