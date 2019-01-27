import React, { Component, Fragment } from 'react'
// tab's components
import TabHead from 'components/tabs/header/TabHead'
import ImgContent from 'components/tabs/content/ImgContent'
// accordion's components
import AccordionHeader from 'components/accordion/header/AccordionHeader'
import { AcrdContainer } from 'styles/accordions'
// table
import Table from 'components/table'
// tab constants
import { tabsMap, tabData } from 'constants/tabs'
// accordion constants
import { acrdnsData } from 'constants/accordions'
// table constants
import { titles, content } from 'constants/tables'
// styles
import { TabNav, Wrapper } from 'styles/tabs'
// tabs container
import Tabs from 'containers/Tabs'

class App extends Component {
  state = {
    activeAccordion: ''
  }

  handleAccordionClick = activeAccordion => {
    this.setState(state => ({
      activeAccordion: state.activeAccordion !== activeAccordion ? activeAccordion : ''
    }))
  }

  render() {
    const { activeAccordion } = this.state

    return (
      <Wrapper>
        <Tabs defaultTab={'FIRST'} defaultTabData={tabData}>
          {({ tabData, handleActive, active }) => (
            <Fragment>
              <TabNav>
                <TabHead handleActive={handleActive} active={active} tabData={tabData} />
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
          )}
        </Tabs>
      </Wrapper>
    )
  }
}

export default App
