import { default as types } from '../actions/types'

const INITIAL_STATE = {
  filtersByType: {},
  selectedOperation: '0',
  addressSearched: '',
}

export const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_FILTERS:
      return { ...state, filtersByType: action.payload }
    case types.SELECTED_OPERATION:
      return { ...state, selectedOperation: action.payload }
    case types.ADDRESS_SEARCHED:
      return { ...state, addressSearched: action.payload }
    default:
      return state
  }
}
