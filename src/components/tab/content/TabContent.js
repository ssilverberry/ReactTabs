import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  left: 0;
  padding: 15px 15px;
  border-radius: 5px;
  border-right: #ddd 2px solid;
  border-bottom: #ddd 2px solid;
  background-color: #eee;
  width: inherit;
  z-index: -1;
  text-align: center;
`;

const TabContent = props => {
  const {data, active} = props;
  
  return data.map(({index, content}) => {
    return (active === index && 
        (<Content key={index} tabindex={index}>
            {content}
        </Content>)
       )
    });
}

export default TabContent;
