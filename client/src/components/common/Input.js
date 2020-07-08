import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 10px;
  width: 81.8%;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({ error }) => (error ? 'red' : '#e9e9e9')};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
  font-size: 12px;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
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
  :focus::placeholder {
    opacity: 0;
    transition: opacity 0.2s;
  }
`
const StyledInput = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  error,
  onBlur,
  maxLength,
}) => (
  <Input
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    autoComplete="off"
    error={error}
    onBlur={onBlur}
    maxLength={maxLength}
  />
)

export default StyledInput
