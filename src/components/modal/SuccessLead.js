import React from 'react'
import { connect } from 'react-redux'
import { activateSuccesModal } from '../../redux/actions'
import styled, { keyframes } from 'styled-components'
import { SubmitButton } from '../common'
import { addThousandSeparator } from '../../utils'

const bg_animation_in = keyframes`
  from {
    background: rgba(0,0,0,0);
  } 
  to{
    background: rgba(0,0,0,0.5);
  }
`

const modalBox_animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`

const ModalWrapper = styled.div`
  display: ${({ status }) => (status ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 2;
  animation: ${bg_animation_in} 500ms forwards;
`

const SuccessScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  background: white;
  border-radius: 7px;
  animation: ${modalBox_animation} 500ms forwards;
  padding: 1.5em 1.5em 1.5em 1.5em;
  button {
    padding: 10px;
  }
`

const CloseButton = styled.span`
  display: block;
  height: 15px;
  width: 15px;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 3px;
  font-size: 23px;
  color: grey;
  :hover {
    color: red;
  }
`

const Content = styled.div`
  padding: 20px;
  color: grey;
  font-size: 12px;
  ul {
    list-style: none;
    li {
      margin-bottom: 20px;
    }
  }
`

const LeadSent = ({ successModalStatus, activateSuccesModal, posting }) => {
  const closeModal = () => {
    activateSuccesModal(false)
  }
  return (
    <ModalWrapper onClick={closeModal} status={successModalStatus}>
      <SuccessScreen>
        <h3>Contactaste al anunciante</h3>
        {posting && (
          <Content>
            <ul>
              <li>
                <h4>Titulo:</h4>
                <p>{posting.title}</p>
              </li>
              <li>
                <h4>Ubicacion:</h4>
                <p>
                  {`${posting.posting_location.address}, ${posting.posting_location.zone}, ${posting.posting_location.city}`}
                </p>
              </li>
              <li>
                <h4>{`${posting.operation_type.operation_type_name}:`}</h4>
                <p>
                  {posting.posting_prices.map(p => {
                    return `$ ${addThousandSeparator(p.price.amount)}`
                  })}
                </p>
              </li>
            </ul>
          </Content>
        )}

        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <SubmitButton onClick={closeModal}>Continuar</SubmitButton>
      </SuccessScreen>
    </ModalWrapper>
  )
}

const mapStateToProps = ({ modals, postings }) => {
  return {
    successModalStatus: modals.successModalStatus,
    posting: postings.find(
      posting => posting.posting_id === modals.leadModalStatus.postingId
    ),
  }
}

export default connect(mapStateToProps, { activateSuccesModal })(LeadSent)
