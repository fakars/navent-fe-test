import React from 'react'
import { connect } from 'react-redux'
import { activateLeadModal } from '../../../redux/actions'
import styled from 'styled-components'
import { daysFromDateToNow } from '../../../utils'
import { Button } from './Button'

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
    height: 1.1em;
    width: 1.1em;
    display: block;
    margin-right: 5px;
    position: relative;
    background-image: url(${require('../../../assets/img/clock.svg')});
  }
`

const Footer = ({ postingData, activateLeadModal }) => {
  return (
    <FooterWrapper>
      <p>{`Publicado hace ${daysFromDateToNow(
        postingData.publish_date
      )} dias`}</p>
      <Button
        onClick={() =>
          activateLeadModal({ active: true, postingId: postingData.posting_id })
        }
      >
        Contactar
      </Button>
    </FooterWrapper>
  )
}

export default connect(null, { activateLeadModal })(Footer)
