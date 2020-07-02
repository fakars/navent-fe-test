import React from 'react'
import styled from 'styled-components'
import { addThousandSeparator } from '../../../utils'

const PriceWrapper = styled.div`
  border-right: 1px solid #e9e9e9;
  padding: 12px 0 15px 11px;
  p {
    font-size: 1.4375rem;
    font-weight: 800;
    margin-bottom: 5px;
  }
  span {
    font-size: 0.8rem;
    height: 12px;
    margin-left: 3px;
  }
`

const renderPrices = postingPrices => {
  return postingPrices.map((postingPrice, i) => {
    return (
      <p key={i}>{`$ ${addThousandSeparator(postingPrice.price.amount)}`}</p>
    )
  })
}

const renderExpenses = expenses => {
  return expenses ? (
    <span>{`+ $ ${addThousandSeparator(expenses.amount)} Expensas`}</span>
  ) : (
    ''
  )
}

const PriceContainer = ({ postingData }) => {
  return (
    <PriceWrapper>
      {renderPrices(postingData.posting_prices)}
      {renderExpenses(postingData.posting_prices[0].expenses)}
    </PriceWrapper>
  )
}

export default PriceContainer
