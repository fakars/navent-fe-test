import React from 'react'
import styled from 'styled-components'
import ImageGallery from './elements/ImageGallery'
import Header from './elements/Header'
import Footer from './elements/Footer'
import Content from './elements/Content'
import PriceContainer from './elements/PriceContainer'

const CardWrapper = styled.div`
  margin: 0 0 10px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.33);
  border-radius: 5px;
  background: white;
  ::before {
    content: '';
    width: 100%;
    height: 3.5px;
    background: ${({ plan, theme }) =>
      plan === 'SUPERHIGHLIGHTED'
        ? theme.bg.card_super
        : theme.bg.card_destacado};
    display: ${({ plan }) => (plan === 'SIMPLE' ? 'none' : 'block')};
    border-radius: 5px 5px 0 0;
  }
`

const CardData = styled.div`
  display: flex;
`

const DataLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const DataRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px 14px;
  min-width: 0;
`

const Card = ({ postingData }) => {
  return (
    <CardWrapper plan={postingData.publication_plan}>
      <CardData>
        <DataLeft>
          <ImageGallery postingData={postingData} />
          <PriceContainer postingData={postingData} />
        </DataLeft>
        <DataRight>
          <Header postingData={postingData} />
          <Content postingData={postingData} />
          <Footer postingData={postingData} />
        </DataRight>
      </CardData>
    </CardWrapper>
  )
}

export default Card
