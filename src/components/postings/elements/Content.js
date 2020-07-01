import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    font-size: 12px;
    color: grey;
    padding-right: 10px;
  }
`

const Content = ({ postingData }) => {
  return (
    <ContentWrapper>
      <p>{postingData.posting_description}</p>
    </ContentWrapper>
  )
}

export default Content
