import React, { Fragment } from "react";
// accordion constants
import { acrdnsMap } from "constants/accordions";
// style
import { AcrdHeader, AcrdText, AcrdArrow } from "styles/accordions";
// component
import AccordionContent from "components/accordion/content/AccordionContent";
// prop types
import PropTypes from "prop-types";

const AccordionHeader = ({ accordionData, handleActive, active, isExpanded }) =>
  accordionData.map(({ primaryText, secondaryText, index }, i) => (
    <Fragment>
      <AcrdHeader
        key={index}
        onClick={() => handleActive(index)}
        isClicked={active === index}
      >
        <AcrdText key={i} isPrimary>
          {primaryText}
        </AcrdText>
        <AcrdArrow isClicked={active === index} />
      </AcrdHeader>
      {acrdnsMap.FIRST === active && (
        <AccordionContent text={primaryText} isActive={active === index} />
      )}
      {acrdnsMap.SECOND === active && (
        <AccordionContent text={primaryText} isActive={active === index} />
      )}
      {acrdnsMap.THIRD === active && (
        <AccordionContent text={primaryText} isActive={active === index} />
      )}
    </Fragment>
  ));

AccordionHeader.propTypes = {
  accordionData: PropTypes.array.isRequired,
  handleActive: PropTypes.func.isRequired,
  active: PropTypes.string
};

export default AccordionHeader;
