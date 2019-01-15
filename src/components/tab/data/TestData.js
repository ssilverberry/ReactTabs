import React from 'react';

const contentFst = <div>
  <div>
    <img src='https://source.unsplash.com/random/250x150' alt='' style={{width: '250px', height: '150px'}}/>
  </div>
  <h2>Hello</h2>
  <div>Here is some text</div>
</div>;

const contentSec = <div>
  <h2>SecondTab</h2>
  <div>Here is some text</div>
</div>;

const contentThd = <div>
  <h2>ThirdTab</h2>
  <div>Here is some text</div>
</div>;

const data = [
  {title: 'First', index: 'FIRST', content: contentFst},
  {title: 'Second', index: 'SECOND', content: contentSec},
  {title: 'Third', index: 'THIRD', content: contentThd},
]

export default data;
