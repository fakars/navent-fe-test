import React, { useState } from 'react'
import { connect } from 'react-redux'
import { activateLeadModal, sendLead } from '../../redux/actions'
import styled, { keyframes } from 'styled-components'
import { StyledInput, SubmitButton } from '../common'

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

const ModalBg = styled.div`
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

const ModalForm = styled.div`
  width: 30%;
  background: white;
  border-radius: 7px;
  animation: ${modalBox_animation} 500ms forwards;
  padding: 1.5em 1.5em 1.5em 1.5em;
  div {
    display: flex;
    flex-direction: column;
    h3 {
      margin-bottom: 20px;
      text-align: center;
    }
    label {
      font-size: 14px;
      margin-bottom: 10px;
    }
    input {
      width: 100%;
    }
    button {
      padding: 10px;
    }
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

const ErrorContainer = styled.span`
  color: red;
  font-size: 12px;
  height: 12px;
  margin: 10px 0 20px 0;
`

const LeadModal = ({
  leadModalStatus,
  activateLeadModal,
  sendLead,
  sentLead,
}) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' })

  const handleSubmit = () => {
    const emailRegex = /^[a-zA-z0-9]+@[a-zA-z0-9]+\.[a-zA-z0-9]{3}$/g
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g
    if (!formData.name) {
      setErrors({ name: 'Ingresa tu nombre' })
    } else if (!formData.phone) {
      setErrors({ phone: 'Ingresa tu teléfono' })
    } else if (!phoneRegex.test(formData.phone)) {
      setErrors({ phone: 'El formato de teléfono no es valido' })
    } else if (!formData.email) {
      setErrors({ email: 'Ingresa tu email' })
    } else if (!emailRegex.test(formData.email)) {
      setErrors({ email: 'El formato de e-mail no es valido' })
    } else if (
      formData.email === sentLead.email &&
      leadModalStatus.postingId === sentLead.postingId
    ) {
      setErrors({ ...errors, email: 'Ya contactaste a este anunciante' })
    } else {
      sendLead({ ...formData, postingId: leadModalStatus.postingId })
      setErrors({ name: '', phone: '', email: '' })
      setFormData({ name: '', phone: '', email: '' })
      closeModal()
    }
  }

  const closeModal = () => {
    setErrors({ name: '', phone: '', email: '' })
    setFormData({ name: '', phone: '', email: '' })
    activateLeadModal({ active: false, postingId: '' })
  }

  return (
    <ModalBg onClick={closeModal} status={leadModalStatus.active}>
      <ModalForm onClick={e => e.stopPropagation()}>
        <div>
          <h3>Contactar al anunciante</h3>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <label htmlFor="name">Nombre</label>
          <StyledInput
            type="text"
            name="name"
            placeholder="Ingresá tu nombre"
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            error={errors.name}
          />
          <ErrorContainer>{errors.name}</ErrorContainer>
          <label htmlFor="phone">Teléfono</label>
          <StyledInput
            type="text"
            name="phone"
            placeholder="Ingresá tu telefono"
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            value={formData.phone}
            error={errors.phone}
          />
          <ErrorContainer>{errors.phone}</ErrorContainer>
          <label htmlFor="email">E-mail</label>
          <StyledInput
            type="text"
            name="email"
            placeholder="Ingresá tu e-mail"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
            error={errors.email}
          />
          <ErrorContainer>{errors.email}</ErrorContainer>
          <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>
        </div>
      </ModalForm>
      )
    </ModalBg>
  )
}

const mapStateToProps = ({ modals, leads }) => {
  return {
    leadModalStatus: modals.leadModalStatus,
    sentLead: leads.sentLead,
  }
}

export default connect(mapStateToProps, { activateLeadModal, sendLead })(
  LeadModal
)
