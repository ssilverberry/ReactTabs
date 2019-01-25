// styled
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${({tableTitle}) => tableTitle.length}, 1fr);
  grid-template-rows: repeat(${({tableContent}) => tableContent.length + 1}, minmax(50px, 1fr));
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 1px 3px 0px #999;
  background-color: #fff;
  border-radius: 3px;
  font-size: 13px;
  margin-top: 10px;
`;

const Header = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding: 7px 20px;
  color: #ccc;
  font-weight: 400;
`;

const Row = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding: 7px 20px;
`;

const Cell = styled.div`
  width: ${({ main }) => main ? '150px' : '100px'};
  text-align: ${({ right }) => right ? 'right' : 'left'};
`;

export { Container, Header, Row, Cell };
