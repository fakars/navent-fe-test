import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const Container = styled.section`
  background: ${({ theme }) => theme.bg.section_bg};
  border-radius: 0.4em;
  border: 1px solid rgba(233, 233, 233, 1);
  box-shadow: -8px 10px 17px -4px rgba(233, 233, 233, 1);
  padding: 15px 12px 0 12px;
  height: fit-content;
`

const AppliedFilters = styled.h3`
  font-size: 17px;
  margin-bottom: 1.3em;
`

const FiltersContainer = () => {
  return (
    <Container>
      <AppliedFilters>Filtrado actual</AppliedFilters>
      <Filter type="address" />
      <Filter type="operation" />
    </Container>
  )
}

export default FiltersContainer
