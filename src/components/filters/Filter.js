import React from 'react'
import styled from 'styled-components'
import { InputFilter, RadioFilter } from './types'
import { filtersByType } from './filterdata'

const FilterWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weight.filter_title};
  font-size: ${({ theme }) => theme.fonts.size.filter_title};
  border-top: 1px solid #e9e9e9;
  padding: 20px 0 10px 0;
`

const renderFilter = filterType => {
  filterType = filterType.toLowerCase()
  if (filterType === 'address')
    return <InputFilter content={filtersByType[filterType]} />
  if (filterType === 'operation')
    return <RadioFilter content={filtersByType[filterType]} />
}

const Filter = ({ type }) => {
  return <FilterWrapper>{renderFilter(type)}</FilterWrapper>
}

export default Filter
