import React from 'react'
import styled from 'styled-components'
import { FilterTitle, SearchInput, MagniButton } from '../elements'

const InputWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

const InputFilter = ({ content }) => {
  return (
    <>
      <FilterTitle title={content.title} />
      <InputWrapper>
        <SearchInput type="text" placeholder={content.placeholder} />
        <MagniButton />
      </InputWrapper>
    </>
  )
}

export default InputFilter
