import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filterByAddress } from '../../../redux/actions'
import styled from 'styled-components'
import { FilterTitle, StyledInput, MagniButton } from '../../common'

const SearchWrapper = styled.div`
  margin-bottom: 15px;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  transition: display 2s;
  justify-content: space-between;
  transition: display 500ms ease-in;
`

const InputFilter = ({ content, filterByAddress }) => {
  const [visible, setVisible] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  const handleToggle = () => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  const handleOnClick = () => {
    if (!searchValue) return
    filterByAddress(searchValue)
    setSearchValue('')
  }

  const handleOnchange = e => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <FilterTitle visible={visible} onClick={handleToggle}>
        <h3>{content.title}</h3>
      </FilterTitle>
      <SearchWrapper visible={visible}>
        <StyledInput
          name="search"
          type="search"
          placeholder={content.placeholder}
          onChange={e => handleOnchange(e)}
          value={searchValue}
        />
        <MagniButton onClick={handleOnClick} />
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
