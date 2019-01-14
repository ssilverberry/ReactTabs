import styled from 'styled-components'

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -5px;
  z-index: 1;
`;
const TabTitle = styled.div`
  padding: 10px 7px;
  width: 75px;
  font-size: 16px;
  border-radius: 5px;
  border-right: #ddd 2px solid;
  border-bottom: #ddd 2px solid;
  background-color: #eee;
  cursor: pointer;
  text-align: center;
`;
const TabContent = styled.div`
  position: absolute;
  left: 0;
  padding: 15px 15px;
  border-radius: 5px;
  border-right: #ddd 2px solid;
  border-bottom: #ddd 2px solid;
  background-color: #eee;
  width: inherit;
  z-index: -1;
  text-align: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 350px;
  margin: 5% auto;
`;

export {Wrapper, TabNav, TabTitle, TabContent};