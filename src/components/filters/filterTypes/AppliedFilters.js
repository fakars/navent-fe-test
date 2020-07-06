import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { filterByOperation, filterByAddress } from '../../../redux/actions'

const AppliedContainer = styled.div`
  margin-bottom: 1.3em;
  h3 {
    font-size: 17px;
    margin-bottom: 15px;
  }
  span {
    background: rgba(0, 0, 0, 0.5);
    padding: 8px;
    color: white;
    font-size: 10px;
    font-weight: 600;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
  }
`

const AppliedFilters = ({
  title,
  appliedFilters,
  filterByOperation,
  filterByAddress,
}) => {
  const renderAppliedFilters = () => {
    const filters = []
    const operation = {
      '1': 'Alquiler',
      '2': 'Venta',
      '3': 'Temporal',
    }
    if (appliedFilters.operation !== '0') {
      filters.push(
        <span
          key={appliedFilters.operation}
          onClick={() => filterByOperation('0')}
        >
          {operation[appliedFilters.operation]}
        </span>
      )
    }
    if (appliedFilters.address) {
      filters.push(
        <span key={appliedFilters.address} onClick={() => filterByAddress('')}>
          {appliedFilters.address}
        </span>
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
