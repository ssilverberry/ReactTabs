import React from 'react'
// styles
import { Header, Cell } from 'styles/tables'

const TableHeader = ({ tableTitle }) => (
  <Header>
    {tableTitle.map((title, index) => {
      const isRight = index < 1 ? true : false
      return (
        <Cell key={title} main={isRight} right={!isRight}>
          {title}
        </Cell>
      )
    })}
  </Header>
)

export default TableHeader
