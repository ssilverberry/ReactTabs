import React, { Component } from 'react';
import TabContent from 'components/tab/content/TabContent';
import TabHead from 'components/tab/header/TabHead';
import  Data  from 'components/tab/data/TestData';
import { TabNav, Wrapper } from 'components/tab/elements/TabElements';

class App extends Component {
  state = {
    index: 'FIRST'
  }
  handleClick = (index) => {
    const pointer = index;
    this.setState({
       index: pointer
    });
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
                   primary={false}
                   active={index}/>
        </TabNav>
        <TabContent data={Data} active={index}/>
      </Wrapper>
    );
  }
}

export default App;
