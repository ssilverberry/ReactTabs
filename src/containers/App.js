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
import { tabsMap } from "constants/tabs";
// accordion constants
import { acrdnsData } from "constants/accordions";
// table constants
import { titles, content } from 'constants/tables'
// styles
import { TabNav, Wrapper } from "styles/tabs";
// Tabs container
import Tabs from 'containers/Tabs';


class App extends Component {
  state = {
    activeAccordion: ''
  };

  handleAccordionClick = activeAccordion => {
    this.setState(state => ({
      activeAccordion:
        state.activeAccordion !== activeAccordion ? activeAccordion : ''
    })
    );
  };

  render() {
    const { activeAccordion } = this.state;

    return (
      <Wrapper>
        <Tabs render={({ tabData, handleActive, active }) => (
          <Fragment>
            <TabNav>
              <TabHead
                tabData={tabData}
                handleActive={handleActive}
                active={active}
              />
            </TabNav>
            {tabsMap.FIRST === active && (
              <AcrdContainer>
                <AccordionHeader
                  accordionData={acrdnsData}
                  handleActive={this.handleAccordionClick}
                  active={activeAccordion}
                />
              </AcrdContainer>
            )}
            {tabsMap.SECOND === active && <Table titles={titles} content={content} />}
            {tabsMap.THIRD === active && <ImgContent />}
          </Fragment>
        )}/>
      </Wrapper>
    );
  }
}

export default App;
