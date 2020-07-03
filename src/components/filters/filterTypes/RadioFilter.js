import React, { useState } from 'react'
import styled from 'styled-components'
import { FilterTitle, Radio } from '../elements'

const RadioWrapper = styled.div`
  margin-bottom: 15px;
  display: ${({ visibility }) => (visibility ? 'block' : 'none')};
`

const RadioFilter = ({ content }) => {
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
      <RadioWrapper visibility={visibility}>
        {content.options &&
          content.options.map(option => {
            return (
              <Radio
                key={option.value}
                name={option.name}
                value={option.value}
                wording={option.wording}
              />
            )
          })}
      </RadioWrapper>
    </>
  )
}

export default RadioFilter
