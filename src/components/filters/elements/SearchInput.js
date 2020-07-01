import styled from 'styled-components'

export default styled.input`
  padding: 10px;
  width: 81.8%;
  border-radius: 5px;
  outline: none;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
  :hover {
    box-shadow: 0 0 4px 0 rgba(3, 3, 3, 0.25);
  }
  :focus {
    border-color: #1ea7dd;
    box-shadow: none;
  }
  ::placeholder {
    font-size: 0.7rem;
  }
`
