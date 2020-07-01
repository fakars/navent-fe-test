import React from 'react'
import styled from 'styled-components'

const RadioOption = styled.div`
  position: relative;
  padding: 10px 0 10px 22px;
  font-size: 12px;
  font-weight: 400;
  :hover {
    background: ${({ theme }) => theme.bg.main_bg};
    transition: 300ms;
  }
  label {
    cursor: pointer;
  }
  input[type='radio'] {
    display: none;
  }

  span {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid grey;
    display: block;
    position: absolute;
    left: 0em;
    top: 0.7em;
  }
  span:after {
    content: '';
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bg.button_checkbox};
    position: absolute;
    top: 18%;
    left: 17%;
    display: none;
  }

  input[type='radio']:checked ~ span:after,
  input[type='radio']:checked ~ span {
    display: block;
    border-color: ${({ theme }) => theme.bg.button_checkbox};
  }
`

const Radio = ({ name, value, wording }) => {
  return (
    <RadioOption>
      <label>
        <input type="radio" name={name} value={value} />
        {wording}
        <span />
      </label>
    </RadioOption>
  )
}

export default Radio
