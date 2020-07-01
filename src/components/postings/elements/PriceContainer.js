import React from 'react'
import styled from 'styled-components'
import { addThousandSeparator } from '../../../utils'

const PriceWrapper = styled.div`
  border-right: 1px solid #e9e9e9;
  padding: 12px 0 7px 11px;
  p {
    font-size: 18px;
    font-weight: 800;
  }
  span {
    font-size: 12px;
    height: 12px;
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
