import React, { useState } from 'react'
import styled from 'styled-components'
import { FilterTitle, Radio } from '../../common'

const RadioWrapper = styled.div`
  margin-bottom: 15px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`

const RadioFilter = ({ content }) => {
  const [visible, setVisible] = useState(true)
  const handleToggle = () => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }
  return (
    <>
      <FilterTitle visible={visible} onClick={handleToggle}>
        <h3>{content.title}</h3>
      </FilterTitle>
      <RadioWrapper visible={visible}>
        {content.options &&
          content.options.map(option => {
            return (
              <Radio
                key={option.value}
                name={option.name}
                value={option.value.toString()}
                wording={option.wording}
              />
            )
          })}
      </RadioWrapper>
    </>
  )
}

export default RadioFilter
