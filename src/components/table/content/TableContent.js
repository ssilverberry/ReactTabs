import React from 'react'
// styles
import { Row, Cell } from 'styles/tables'

const TableContent = ({ tableContent }) => 
  tableContent.map((keys) => {
    return <Row key={keys.name}>
      {
        Object.values(keys).map((values, index) => {
          return index < 1 ? <Cell key={values+index} main>{values}</Cell> : <Cell key={index} right>{values}</Cell>
        })
      }
    </Row>;
  });

export default TableContent;
