// react
import React from 'react';
// style
import { Title } from 'styles/tabs';
// prop types
import PropTypes from 'prop-types';

const TabHead = ({ tabData, handleActive, active }) =>
  tabData.map(({ title, index }) =>
    <Title
      key={index}
      onClick={() => handleActive(index)}
      tabindex={index}
      primary={active === index}
    >
      {title}
    </Title>
  )

TabHead.propTypes = {
  tabData: PropTypes.array.isRequired,
  handleActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default TabHead;
