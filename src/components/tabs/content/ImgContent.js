import React from 'react'
// styles
import { Content } from 'styles/tabs'

const ImgContent = () => (
  <Content>
    <div>
      <img 
        src='https://source.unsplash.com/random/250x150' 
        alt='img' 
        style={{width: '250px', height: '150px'}}/>
    </div>
    <h2>Hello</h2>
    <div>We will</div>
  </Content>
)

export default ImgContent
