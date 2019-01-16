import React from 'react';

const contentFst = <div>
  <div>
    <img src='https://source.unsplash.com/random/250x150' alt='' style={{width: '250px', height: '150px'}}/>
  </div>
  <h2>Hello</h2>
  <div>We will</div>
</div>;

const contentSec = <div>
  <h2>SecondTab</h2>
  <div>We will</div>
</div>;

const contentThd = 
  <table style={{border: '2px solid #aaa'}}>
    <thead>
      <tr style={{'textAlign': 'center'}}>
        <th>Hi, it is a table header</th> 
      </tr>
    </thead>
    <tbody>
      <tr rowSpan='2' style={{border: '2px solid #aaa'}}>
        <td style={{border: '2px solid #aaa'}}>First cell</td>
        <td style={{border: '2px solid #aaa'}}>Second cell</td>
      </tr>
      <tr rowSpan='2' style={{border: '2px solid #aaa'}}>
        <td style={{border: '2px solid #aaa'}}>First cell</td>
        <td style={{border: '2px solid #aaa'}}>Second cell</td>
      </tr>
    </tbody>
  </table>;

const data = [
  {title: 'Lets', index: 'FIRST', content: contentFst},
  {title: 'Rock', index: 'SECOND', content: contentSec},
  {title: 'It', index: 'THIRD', content: contentThd},
]

export default data;
