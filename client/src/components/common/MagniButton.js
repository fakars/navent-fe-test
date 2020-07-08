import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  outline: none;
  width: 15%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
  :hover {
    border-color: #1ea7dd;
  }
  :active {
    background: #61c1e7;
    border-color: #61c1e7;
    span {
      border-color: white;
      background: #61c1e7;
      :after {
        background: white;
      }
    }
  }
`

const Icon = styled.span`
  position: relative;
  display: inline-block;
  background: #fff;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  border: 2px solid #1ea7dd;
  ::after {
    content: '';
    height: 2px;
    width: 6px;
    background: #1ea7dd;
    position: absolute;
    top: 8px;
    left: 7px;
    transform: rotate(40deg);
  }
`
const MagniButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  )
}

export default MagniButton
