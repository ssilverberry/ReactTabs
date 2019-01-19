import React, { Fragment } from 'react';
// style
import { AcrdText, AcrdContent  } from 'styles/accordions'
// prop types
import PropTypes from 'prop-types';

const AccordionContent = ({text, isExpanded, isActive}) => 
<Fragment>
  {
    isActive && <AcrdContent>
      <AcrdText>{ text }</AcrdText>
      <AcrdText>{ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos maiores, fugiat suscipit ab id quia unde maxime ad.'}</AcrdText>
    </AcrdContent> 
  }
</Fragment>;

export default AccordionContent;
