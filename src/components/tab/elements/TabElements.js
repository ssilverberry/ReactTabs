import styled from 'styled-components'

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -5px;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 350px;
  margin: 5% auto;
`;

export {Wrapper, TabNav};