import React, { Component, Fragment } from 'react';
// tab's components
import TabHead from 'components/tabs/header/TabHead';
import ImgContent from 'components/tabs/content/ImgContent';
import TextContent from 'components/tabs/content/TextContent';
import TableContent from 'components/tabs/content/TableContent';
// constants
import { tabsMap, tabData } from 'constants/tabs';
// styles
import { TabNav, Wrapper } from 'styles/tabs';

class App extends Component {
  state = {
    activeTab: tabsMap.FIRST,
    tableConst: '',
    elemtnData: {
      isActive: true
    }
  };

  handleClick = (activeTab) => {
    this.setState({ activeTab });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Wrapper>
        <TabNav>
          <TabHead
            tabData={tabData}
            handleActive={this.handleClick}
            active={index}
          />
        </TabNav>
        <Fragment>
          {tabsMap.FIRST === activeTab && <ImgContent />}
          {tabsMap.SECOND === activeTab && <TextContent />}
          {tabsMap.THIRD === activeTab && <TableContent />}
        </Fragment>
      </Wrapper>
    );
  }
}

export default App;
