import { default as types } from '../actions/types'

export const postingsReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POSTINGS:
      return [...action.payload]
    default:
      return state
  }
}
