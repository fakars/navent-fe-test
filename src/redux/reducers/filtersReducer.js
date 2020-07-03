import { default as types } from '../actions/types'

const INITIAL_STATE = {
  selectedFilter: 0,
}

export const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECTED_FILTER:
      return { ...state, selectedFilter: action.payload }
    default:
      return state
  }
}
