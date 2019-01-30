import React, { Fragment } from 'react'
// style
import { AcrdHeader, AcrdText, AcrdArrow } from 'styles/accordions'
// accordion component
import AccordionContent from 'components/accordion/content/AccordionContent'
// prop types
import PropTypes from 'prop-types'
// theme context hoc
import withThemeContext from 'hoc/withThemeContext'

const AccordionHeader = ({ accordionData, handleActive, active, context }) =>
  accordionData.map(({ primaryText, secondaryText, index }) => (
    <Fragment key={index}>
      <AcrdHeader
        onClick={() => handleActive(index)}
        isClicked={active === index}
        background={context.theme.background}
        color={context.theme.color}
      >
        <AcrdText isPrimary>{primaryText}</AcrdText>
        <AcrdText>{secondaryText}</AcrdText>
        <AcrdArrow isClicked={active === index} />
      </AcrdHeader>
      {active === index && <AccordionContent text={secondaryText} isActive={active === index} />}
    </Fragment>
  ))

AccordionHeader.propTypes = {
  accordionData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleActive: PropTypes.func.isRequired,
  active: PropTypes.string
}

export default withThemeContext(AccordionHeader)
