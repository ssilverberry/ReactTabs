import React, { Component } from 'react';
import '../App.css';
import Tabs from './Tabs';

class App extends Component {

  render() {
    const content = <div>
      <div>
        <img src='https://source.unsplash.com/random/250x150' alt='' style={{width: '250px', height: '150px'}}/>
      </div>
      <h2>Hello</h2>
      <div>Here is some text</div>
    </div>;
    const contentSec = <div>
      <h2>Second</h2>
      <div>tab is here, of course</div>
    </div>
    const contentThd = <div>
      <h2>Third</h2>
      <div>tab is here, of course</div>
      </div>

    return (
      <Tabs>
        <div tabTitle='First' tabIndex={1}>
          {content}
        </div>
        <div tabTitle='Second' tabIndex={2}>
          {contentSec}
        </div>
        <div tabTitle='Third' tabIndex={3}>
          {contentThd}
        </div>
        
      </Tabs>
    );
  }
}

export default App;
