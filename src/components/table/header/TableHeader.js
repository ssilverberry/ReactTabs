import React, { Fragment } from 'react'
// styles
import { Header, Cell } from 'styles/tables'

const TableHeader = ({ tableTitle }) => {
  return <Fragment>
    <Header>
      {
        tableTitle.map((title, index) => {
          return index < 1 ? <Cell key={title} main>{title}</Cell> : <Cell key={title} right>{title}</Cell>
        })
      }
    </Header>
  </Fragment>
}

export default TableHeader;
