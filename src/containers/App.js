import React, { Component, Fragment } from "react";
// tab's components
import TabHead from "components/tabs/header/TabHead";
import ImgContent from "components/tabs/content/ImgContent";
// accordion's components
import AccordionHeader from "components/accordion/header/AccordionHeader";
import { AcrdContainer } from "styles/accordions";
// table
import Table from 'components/table/Table'
// tab constants
import { tabsMap, tabData } from "constants/tabs";
// accordion constants
import { acrdnsData } from "constants/accordions";
// table constants
import { titles, content } from 'constants/tables'
// styles
import { TabNav, Wrapper } from "styles/tabs";

class App extends Component {
  state = {
    activeTab: tabsMap.FIRST,
    activeAccordion: ''
  };

  handleClick = activeTab => {
    this.setState({ activeTab });
  };

  handleAccordionClick = activeAccordion => {
    // after 
    this.setState(state => ({
      activeAccordion:
        state.activeAccordion !== activeAccordion ? activeAccordion : ''
    })
    );
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
          {tabsMap.THIRD === activeTab && <Table titles={titles} content={content} />}
        </Fragment>
      </Wrapper>
    );
  }
}

export default App;
