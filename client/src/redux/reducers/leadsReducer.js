import types from '../actions/types'

const INITIAL_STATE = {
  sentLead: {},
}

export const leadsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEND_LEAD:
      return { ...state, sentLead: action.payload }
    default:
      return state
  }
}
