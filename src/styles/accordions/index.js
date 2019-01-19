// styled
import styled from 'styled-components';

const AcrdContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  transition: all 0.3s;
`;

const AcrdHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 17px 25px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px #999;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: ${({ isClicked }) => isClicked ? '10px' : '0'}
`;

const AcrdText = styled.div`
  color: ${({ isPrimary }) => isPrimary ? '#333' : '#999'};
`;

const AcrdArrow = styled.div`
  width: 8px;
  height: 8px;
  border-right: 2px solid #999;
  border-bottom: 2px solid #999;
  align-self: center;
  transition: all 0.3s;
  transform-origin: center center;
  transform: rotate(${({ isClicked }) => isClicked ? '-135deg' : '45deg'});
`;

const AcrdContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px #999;
  border-top: 1px solid #eaeaea;
  margin-bottom: 10px;
  transition: all 0.3s;
`;

export {
  AcrdContainer, 
  AcrdContent,
  AcrdHeader,
  AcrdText,
  AcrdArrow
};
