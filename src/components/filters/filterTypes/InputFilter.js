import React, { useState } from 'react'
import styled from 'styled-components'
import { FilterTitle, SearchInput, MagniButton } from '../elements'

const InputWrapper = styled.div`
  margin-bottom: 15px;
  display: ${({ visibility }) => (visibility ? 'flex' : 'none')};
  transition: display 2s;
  justify-content: space-between;
  transition: display 500ms ease-in;
`

const InputFilter = ({ content }) => {
  const [visibility, setVisibility] = useState(true)
  const handleToggle = () => {
    if (visibility) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }
  return (
    <>
      <FilterTitle visibility={visibility} onClick={handleToggle}>
        <h3>{content.title}</h3>
      </FilterTitle>
      <InputWrapper visibility={visibility}>
        <SearchInput type="text" placeholder={content.placeholder} />
        <MagniButton />
      </InputWrapper>
    </>
  )
}

export default InputFilter
