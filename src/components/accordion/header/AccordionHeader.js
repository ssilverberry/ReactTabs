import React, { Fragment } from 'react';
// style
import { AcrdHeader, AcrdText, AcrdArrow } from 'styles/accordions';
// component
import AccordionContent from 'components/accordion/content/AccordionContent';
// prop types
import PropTypes from 'prop-types';

const AccordionHeader = ({ accordionData, handleActive, active, isExpanded}) => 
  accordionData.map(({primaryText, secondaryText, index}) => 
    <Fragment>
      <AcrdHeader 
        key={index}
        onClick={() => handleActive(index)}
        isClicked={active === index}
      >
        <AcrdText isPrimary>{primaryText}</AcrdText>
        <AcrdText>{secondaryText}</AcrdText>
        <AcrdArrow isClicked={active === index} />
      </AcrdHeader>
        {
          <AccordionContent
            text={primaryText} 
            isActive={active === index}
            isExpanded={isExpanded}
          />
        }
    </Fragment>
  )

// AccordionHeader.propTypes = {
//   accordionData: PropTypes.array.isRequired,
//   handleActiveAccordion: PropTypes.func.isRequired,
//   active: PropTypes.string
// }

export default AccordionHeader;
