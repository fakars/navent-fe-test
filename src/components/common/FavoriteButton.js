import React from 'react'
import { connect } from 'react-redux'
import { setFavorited } from '../../redux/actions'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: none;
  background: white;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    transition: 400ms;
  }
`
const Icon = styled.span`
  height: 16px;
  width: 16px;
  background-image: ${({ favorite }) =>
    favorite
      ? `url(${require('../../assets/img/favChecked.svg')})`
      : `url(${require('../../assets/img/fav.svg')})`};
`

const FavoriteButton = ({ postingId, favorited, setFavorited }) => {
  const handleFavorite = async () => {
    if (!favorited) {
      setFavorited(postingId, true)
    } else {
      setFavorited(postingId, false)
    }
  }
  return (
    <Button onClick={handleFavorite}>
      <Icon favorite={favorited} />
    </Button>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    favorited: state.postings.find(
      posting => posting.posting_id === ownProps.postingId
    ).favorited,
  }
}

export default connect(mapStateToProps, { setFavorited })(FavoriteButton)
