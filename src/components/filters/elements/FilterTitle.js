import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
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
    transform: rotate(45deg);
    margin-right: 10px;
  }
`

const FilterTitle = props => {
  return (
    <TitleContainer>
      <h3>{props.title}</h3>
    </TitleContainer>
  )
}

export default FilterTitle
