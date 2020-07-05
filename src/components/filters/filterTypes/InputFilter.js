import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filterByAddress } from '../../../redux/actions'
import styled from 'styled-components'
import { FilterTitle, StyledInput, MagniButton } from '../elements'

const SearchWrapper = styled.div`
  margin-bottom: 15px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  transition: display 2s;
  justify-content: space-between;
  transition: display 500ms ease-in;
`

const InputFilter = ({ content, filterByAddress, addressSearched }) => {
  const [visible, setVisible] = useState(true)

  const handleToggle = () => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    filterByAddress(addressSearched)
  }

  const handleOnchange = e => {
    filterByAddress(e.target.value)
  }

  return (
    <>
      <FilterTitle visible={visible} onClick={handleToggle}>
        <h3>{content.title}</h3>
      </FilterTitle>
      <SearchWrapper visible={visible} onSubmit={e => handleOnSubmit(e)}>
        <StyledInput
          name="search"
          type="search"
          placeholder={content.placeholder}
          onChange={e => handleOnchange(e)}
          value={addressSearched}
        />
        <MagniButton />
      </SearchWrapper>
    </>
  )
}

const mapStateToProps = state => {
  return {
    addressSearched: state.filters.addressSearched,
  }
}

export default connect(mapStateToProps, { filterByAddress })(InputFilter)
