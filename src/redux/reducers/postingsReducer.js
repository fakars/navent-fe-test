import { default as types } from '../actions/types'

export const postingsReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTINGS:
      return [...action.payload]
    case types.SET_FAVORITED:
      return state.map(posting => {
        return posting.posting_id === action.payload.id
          ? {
              ...posting,
              favorited: action.payload.favorited,
            }
          : posting
      })
    default:
      return state
  }
}
