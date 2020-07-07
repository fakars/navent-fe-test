import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  activateLeadModal,
  sendLead,
  activateSuccesModal,
} from '../../redux/actions'
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

const ModalForm = styled.form`
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
      margin-bottom: 10px;
    }
    input {
      width: 100%;
      font-size: 14px;
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
  activateSuccesModal,
  sendLead,
  sentLead,
}) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' })

  const validateName = () => {
    if (!formData.name) {
      setErrors({ ...errors, name: 'Ingresa tu nombre' })
    } else {
      setErrors({ ...errors, name: '' })
      return true
    }
  }

  const validatePhone = () => {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g
    if (!formData.phone) {
      setErrors({ ...errors, phone: 'Ingresa tu teléfono' })
    } else if (!phoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: 'El formato de teléfono no es valido' })
    } else {
      setErrors({ ...errors, phone: '' })
      return true
    }
  }

  const validateEmail = () => {
    const emailRegex = /^[a-zA-ZñÑ0-9]+@[a-zA-ZñÑ0-9]+\.[a-zA-z0-9]{3}$/g
    if (!formData.email) {
      setErrors({ ...errors, email: 'Ingresa tu email' })
    } else if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: 'El formato de e-mail no es valido' })
    } else if (
      formData.email === sentLead.email &&
      leadModalStatus.postingId === sentLead.postingId
    ) {
      setErrors({ ...errors, email: 'Ya contactaste a este anunciante' })
    } else {
      setErrors({ ...errors, email: '' })
      return true
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validateName() && validatePhone() && validateEmail()) {
      sendLead({ ...formData, postingId: leadModalStatus.postingId })
      activateSuccesModal(true)
      closeModal()
    }
  }

  const handleOnChange = e => {
    const nameRegex = /^[a-zA-ZñÑ]{0,}$/
    const phoneRegex = /^[0-9]{0,}$/
    if (e.target.name === 'name' && nameRegex.test(e.target.value)) {
      setFormData({ ...formData, name: e.target.value })
      validateName()
    }
    if (e.target.name === 'phone' && phoneRegex.test(e.target.value)) {
      setFormData({ ...formData, phone: e.target.value })
      validatePhone()
    }
    if (e.target.name === 'email') {
      setFormData({ ...formData, email: e.target.value })
      validatePhone()
    }
  }

  const closeModal = () => {
    setErrors({ name: '', phone: '', email: '' })
    setFormData({ name: '', phone: '', email: '' })
    activateLeadModal({ ...leadModalStatus, active: false })
  }

  return (
    <ModalWrapper onClick={closeModal} status={leadModalStatus.active}>
      <ModalForm
        onClick={e => e.stopPropagation()}
        onSubmit={e => handleSubmit(e)}
        method="POST"
      >
        <div>
          <h3>Contactar al anunciante</h3>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <label htmlFor="name">Nombre</label>
          <StyledInput
            type="text"
            name="name"
            placeholder="Ingresá tu nombre"
            onChange={handleOnChange}
            onBlur={validateName}
            value={formData.name}
            error={errors.name}
            data={formData.name}
            maxLength="40"
          />
          <ErrorContainer>{errors.name}</ErrorContainer>
          <label htmlFor="phone">Teléfono</label>
          <StyledInput
            type="text"
            name="phone"
            placeholder="Ingresá tu telefono"
            onChange={handleOnChange}
            value={formData.phone}
            error={errors.phone}
            onBlur={validatePhone}
            maxLength="11"
          />
          <ErrorContainer>{errors.phone}</ErrorContainer>
          <label htmlFor="email">E-mail</label>
          <StyledInput
            type="text"
            name="email"
            placeholder="Ingresá tu e-mail"
            onChange={handleOnChange}
            value={formData.email}
            error={errors.email}
            onBlur={validateEmail}
            maxLength="40"
          />
          <ErrorContainer>{errors.email}</ErrorContainer>
          <SubmitButton>Enviar</SubmitButton>
        </div>
      </ModalForm>
      )
    </ModalWrapper>
  )
}

const mapStateToProps = ({ modals, leads }) => {
  return {
    leadModalStatus: modals.leadModalStatus,
    sentLead: leads.sentLead,
  }
}

export default connect(mapStateToProps, {
  activateLeadModal,
  sendLead,
  activateSuccesModal,
})(LeadModal)
