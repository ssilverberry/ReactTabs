import React, { Fragment } from 'react'
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
import { Wrapper } from 'styles/tabs'
// hoc(s)
import withAccordion from 'hoc/withAccordion'
// theme provider
import ThemeProvider from 'contexts/themes/theme-provider'
// React hook
import useTabs from 'containers/Tabs'

const App = ({ handleActiveAcc, activeAcc }) => {
  const defaultTab = 'FIRST'
  const defaultTabData = tabData
  const [activeTab, changeActive] = useTabs(defaultTab)

  return (
    <Wrapper>
      <ThemeProvider>
        <Fragment>
          <TabHead handleActive={changeActive} active={activeTab} tabData={defaultTabData} />
          {tabsMap.FIRST === activeTab && (
            <AcrdContainer>
              <AccordionHeader accordionData={acrdnsData} handleActive={handleActiveAcc} active={activeAcc} />
            </AcrdContainer>
          )}
          {tabsMap.SECOND === activeTab && <Table titles={titles} content={content} />}
          {tabsMap.THIRD === activeTab && <ImgContent />}
        </Fragment>
      </ThemeProvider>
    </Wrapper>
  )
}

export default withAccordion(App)
