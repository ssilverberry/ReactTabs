import React, { Component, Fragment } from 'react';

class Tabs extends Component {
  state = {
    activeTab: this.props.defaultTab
  }

  handleClick = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { render, tabData } = this.props;
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
