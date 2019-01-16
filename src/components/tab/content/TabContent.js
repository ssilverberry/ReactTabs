import React from 'react';
// style
import { Content } from 'components/tab/styles/StyledElements';

const TabContent = ({data, active, tabindex, tabcontent}) => {  
  return data.map(({index, content}) => {
    return (active === index && 
        (<Content key={index} tabindex={index}>
            {content}
        </Content>)
       )
    });
}

export default TabContent;
