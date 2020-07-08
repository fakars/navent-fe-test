import types from '../actions/types'

const INITIAL_STATE = {
  leadModalStatus: { active: false, postingId: '' },
  successModalStatus: false,
}

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LEAD_MODAL:
      return { ...state, leadModalStatus: action.payload }
    case types.SUCCESS_MODAL:
      return { ...state, successModalStatus: action.payload }
    default:
      return state
  }
}
