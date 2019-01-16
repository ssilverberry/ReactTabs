// react
import React from 'react';
// style
import Title from 'components/tab/styles/StyledElements';
// prop types
import PropTypes from 'prop-types';

const TabHead = ({data, handleActive, active}) => {
  return data.map(({title, index}) => {
    return (
      <Title key={index} 
            onClick={() => handleActive(index)}
            tabindex={index}
            primary={active === index ? true : false}>
        {title}
      </Title>
    );
  });
}

Title.propTypes = {
  onClick: PropTypes.func.isRequired,
  tabindex: PropTypes.string.isRequired,
  primary: PropTypes.bool
}

export default TabHead;
