import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 1em;
  cursor: pointer;
  ::after {
    content: '';
    height: 6px;
    width: 6px;
    border: 1px solid grey;
    border-width: 2px 0 0 2px;
    transform: ${({ visible }) =>
      visible ? 'rotate(45deg)' : 'rotate(-135deg)'};
    margin-right: 10px;
    animation: transform 0.4ms forwards;
  }
`
