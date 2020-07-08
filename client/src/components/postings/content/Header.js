import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const HeaderWrapper = styled.div`
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    margin-bottom: 3px;
    font-weight: 600;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  a,
  h4 {
    color: #61c1e7;
    margin-bottom: 5px;
  }
  span {
    font-size: 0.86rem;
    font-weight: 600;
    cursor: pointer;
  }
`

const Header = ({ postingData }) => {
  return (
    <HeaderWrapper>
      <h4>
        <a href="/">{postingData.title}</a>
      </h4>
      <span>{`${postingData.posting_location.address}, ${postingData.posting_location.zone}, ${postingData.posting_location.city}`}</span>
    </HeaderWrapper>
  )
}

export default connect()(Header)
