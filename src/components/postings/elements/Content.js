import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-line-clamp: ${({ plan }) =>
    plan === 'SUPERHIGHLIGHTED' ? '4' : '3'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    font-size: 13px;
    color: grey;
    padding-right: 10px;
  }
`

const Content = ({ postingData }) => {
  return (
    <ContentWrapper plan={postingData.publication_plan}>
      <p>{postingData.posting_description}</p>
    </ContentWrapper>
  )
}

export default Content
