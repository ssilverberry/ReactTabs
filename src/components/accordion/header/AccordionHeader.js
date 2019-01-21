import React, { Fragment } from "react";
// accordion constants
import { acrdnsMap } from "constants/accordions";
// style
import { AcrdHeader, AcrdText, AcrdArrow } from "styles/accordions";
// component
import AccordionContent from "components/accordion/content/AccordionContent";
// prop types
import PropTypes from "prop-types";

const AccordionHeader = ({ accordionData, handleActive, active }) =>
  accordionData.map(({ primaryText, secondaryText, index }) => (
    <Fragment>
      <AcrdHeader
        key={index}
        onClick={() => handleActive(index)}
        isClicked={active === index}
      >
        <AcrdText isPrimary>{primaryText}</AcrdText>
        <AcrdArrow isClicked={active === index} />
      </AcrdHeader>
      {active === index && (
        <AccordionContent text={secondaryText} isActive={active === index} />
      )}
    </Fragment>
  ));

AccordionHeader.propTypes = {
  accordionData: PropTypes.array.isRequired,
  handleActive: PropTypes.func.isRequired,
  active: PropTypes.string
};

export default AccordionHeader;
