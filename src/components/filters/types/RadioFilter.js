import React from 'react'
import styled from 'styled-components'
import { FilterTitle, Radio } from '../elements'

const RadioWrapper = styled.div`
  margin-bottom: 15px;
`

const RadioFilter = ({ content }) => {
  return (
    <>
      <FilterTitle title={content.title} />
      <RadioWrapper>
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
