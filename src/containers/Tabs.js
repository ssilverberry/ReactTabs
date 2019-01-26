import React, { Component, Fragment } from 'react';
// tab constants
import { tabsMap, tabData } from 'constants/tabs';

class Tabs extends Component {
  state = {
    activeTab: tabsMap.FIRST
  }

  handleClick = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { render } = this.props;
    const { activeTab } = this.state;

    return <Fragment>
      {render({
        active: activeTab,
        handleActive: this.handleClick,
        tabData: tabData
      })}
    </Fragment>;
  }
}

export default Tabs;
