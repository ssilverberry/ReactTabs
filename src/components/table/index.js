import React, { Fragment } from "react";
// styles
import { Container } from 'styles/tables'
// components
import TableContent from 'components/table/content/TableContent'
import TableHeader from 'components/table/header/TableHeader'
// prop types
import PropTypes from 'prop-types';

const Table = ({ titles, content }) => {
  return <Fragment>
    <Container tableTitle={titles} tableContent={content}>
      <TableHeader tableTitle={titles} />
      <TableContent tableContent={content} />
    </Container>
  </Fragment>
}

Table.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table;
