// react
import React from 'react';
// styled
import styled from 'styled-components';
// prop types
import PropTypes from 'prop-types';

const Title = styled.div`
  padding: 10px 7px;
  width: 75px;
  font-size: 16px;
  border-radius: 5px;
  border-right: #ccc 2px solid;
  border-bottom: ${props => props.primary ? '#eee' : '#ccc'} 2px solid;
  background-color: #eee;
  cursor: pointer;
  text-align: center;
`;

const TabHead = (props) => {
  const {data, handleActive, active} = props;
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
