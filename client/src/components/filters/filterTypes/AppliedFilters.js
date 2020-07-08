import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { filterByOperation, filterByAddress } from '../../../redux/actions'
import { renderOperationType } from '../../../utils'

const active_bullet = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const AppliedContainer = styled.div`
  margin-bottom: 1.3em;
  h3 {
    font-size: 17px;
    margin-bottom: 15px;
  }
`

const FilterBullet = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 8px 5px 10px;
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 5px;
  margin: 5px 0 0 5px;
  animation: ${active_bullet} 500ms forwards;
`

const CloseButton = styled.span`
  font-size: 16px;
  text-align: center;
  margin: 2.5px 0 0 10px;
  cursor: pointer;
`

const AppliedFilters = ({
  title,
  appliedFilters,
  filterByOperation,
  filterByAddress,
}) => {
  const renderAppliedFilters = () => {
    const filters = []
    if (appliedFilters.operation !== '0') {
      filters.push(
        <FilterBullet key={appliedFilters.operation}>
          {renderOperationType(appliedFilters.operation)}
          <CloseButton onClick={() => filterByOperation('0')}>
            &times;
          </CloseButton>
        </FilterBullet>
      )
    }
    if (appliedFilters.address) {
      filters.push(
        <FilterBullet key={appliedFilters.address}>
          {appliedFilters.address}
          <CloseButton onClick={() => filterByAddress('')}>&times;</CloseButton>
        </FilterBullet>
      )
    }
    return filters
  }
  return (
    <AppliedContainer>
      <div>
        <h3>{title}</h3>
        {renderAppliedFilters()}
      </div>
    </AppliedContainer>
  )
}

const mapStateToProps = ({ filters }) => {
  return {
    appliedFilters: {
      operation: filters.selectedOperation,
      address: filters.addressSearched,
    },
  }
}

export default connect(mapStateToProps, { filterByOperation, filterByAddress })(
  AppliedFilters
)
