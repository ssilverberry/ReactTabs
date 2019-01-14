import React, { Component } from 'react';
import {Wrapper, TabNav, TabContent} from '../Styles/TabElements';
import Tab from './Tab.js';

class Tabs extends Component { 
  
  state = {
    active: true,
    index: 1
  }

  handleActiveTab = (state) => {
    this.setState(() => ({
      active: state.active,
      index: state.index
    }));
  }

  render() {
    const {
      props: {
        children
      },
      state: {
        index
      }
    } = this;
    return (
      <Wrapper > 
        <TabNav>
          {children.map((child) => {
            return <Tab 
                    key={child.props.tabIndex} 
                    tabTitle={child.props.tabTitle} 
                    handleActive={this.handleActiveTab}
                    tabIndex={child.props.tabIndex}
                    />
          })}
        </TabNav>
        {
          children.map((child) =>
            (index === child.props.tabIndex && 
              <TabContent key={child.props.tabIndex}>
                {child.props.children}</TabContent>) 
            )
        }
      </Wrapper>
    );
  }
}

export default Tabs;
