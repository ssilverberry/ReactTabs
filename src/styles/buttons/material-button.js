// styled
import styled from 'styled-components'

const ThemeButton = styled.button`
  margin: 3% 0;
  background-color: #ddd;
  color: #000;
  padding: 10px;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px #999;

  &:active {
    background: #eee;
  }
`

export default ThemeButton
