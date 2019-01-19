import React from 'react'
// styles
import { Content } from 'styles/tabs'

const TableContent = () => (
  <Content>
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
    </table>
  </Content>
)

export default TableContent
