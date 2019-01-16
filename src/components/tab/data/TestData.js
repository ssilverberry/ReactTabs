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

const contentThd = <div>
  <h2>ThirdTab</h2>
  <div>Rock you</div>
</div>;

const data = [
  {title: 'Lets', index: 'FIRST', content: contentFst},
  {title: 'Rock', index: 'SECOND', content: contentSec},
  {title: 'It', index: 'THIRD', content: contentThd},
]

export default data;
