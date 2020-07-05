import { default as types } from '../actions/types'

const INITIAL_STATE = {
  selectedOperation: '0',
  addressSearched: '',
}

export const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SELECTED_OPERATION:
      return { ...state, selectedOperation: action.payload }
    case types.ADDRESS_SEARCHED:
      return { ...state, addressSearched: action.payload }
    default:
      return state
  }
}
