import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    position: relative;
  }
  p::before {
    content: '';
    height: 1em;
    width: 1em;
    display: block;
    margin-right: 5px;
    position: relative;
    background-image: url(${require('../../../assets/img/clock.svg')});
  }
`

const Button = styled.button`
  background: #fc7b27;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

const Footer = ({ postingData }) => {
  return (
    <FooterWrapper>
      <p>Publicado hace 3 dias</p>
      <Button>Contactar</Button>
    </FooterWrapper>
  )
}

export default Footer
