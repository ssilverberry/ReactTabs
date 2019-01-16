// react import
import React, { Component } from 'react';
// data for tests
import  Data  from 'components/tab/data/TestData';
// tab's components
import TabContent from 'components/tab/content/TabContent';
import TabHead from 'components/tab/header/TabHead';
import { TabNav, Wrapper } from 'components/tab/styles/StyledElements';

class App extends Component {  
  state = { index: 'FIRST' }

  handleClick = (index) => {
    const pointer = index;
    this.setState({ index: pointer });
  }

  render() {
    const {
      state: {
        index
      }
    } = this;

    return (
      <Wrapper>
        <TabNav>
          <TabHead data={Data}
            handleActive={this.handleClick}
            active={index}/>
        </TabNav>
        <TabContent data={Data} 
                    active={index}/>
      </Wrapper>
    );
  }
}

export default App;
