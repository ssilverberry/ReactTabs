import React, { Component, Fragment } from "react";
// tab's components
import TabHead from "components/tabs/header/TabHead";
import ImgContent from "components/tabs/content/ImgContent";
import TableContent from "components/tabs/content/TableContent";
// accordion's components
import AccordionHeader from "components/accordion/header/AccordionHeader";
import { AcrdContainer } from "styles/accordions";
// tab constants
import { tabsMap, tabData } from "constants/tabs";
// accordion constants
import { acrdnsData } from "constants/accordions";
// styles
import { TabNav, Wrapper } from "styles/tabs";

class App extends Component {
  state = {
    activeTab: tabsMap.FIRST,
    activeAccordion: ""
  };

  handleClick = activeTab => {
    this.setState({ activeTab });
  };

  handleAccordionClick = activeAccordion => {
    this.setState(state => {
      return { 
        activeAccordion: state.activeAccordion !== activeAccordion ? activeAccordion : ''
      };
    });
  };

  render() {
    const { activeTab, activeAccordion, expanded } = this.state;

    return (
      <Wrapper>
        <TabNav>
          <TabHead
            tabData={tabData}
            handleActive={this.handleClick}
            active={activeTab}
          />
        </TabNav>
        <Fragment>
          {tabsMap.FIRST === activeTab && (
            <AcrdContainer>
              <AccordionHeader
                accordionData={acrdnsData}
                handleActive={this.handleAccordionClick}
                active={activeAccordion}
                isExpanded={expanded}
              />
            </AcrdContainer>
          )}
          {tabsMap.SECOND === activeTab && <ImgContent />}
          {tabsMap.THIRD === activeTab && <TableContent />}
        </Fragment>
      </Wrapper>
    );
  }
}

export default App;
