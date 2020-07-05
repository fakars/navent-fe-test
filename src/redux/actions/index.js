import { default as types } from './types'
import { default as server } from '../../api'

export const fetchPostings = () => async dispatch => {
  const res = await server.get('http://localhost:3001/postings')
  dispatch({
    type: types.FETCH_POSTINGS,
    payload: res.data,
  })
}

export const filterByOperation = value => dispatch => {
  dispatch({
    type: types.SELECTED_OPERATION,
    payload: value,
  })
}

export const filterByAddress = value => dispatch => {
  dispatch({
    type: types.ADDRESS_SEARCHED,
    payload: value,
  })
}

export const activateLeadModal = value => dispatch => {
  dispatch({
    type: types.LEAD_MODAL,
    payload: value,
  })
}

export const sendLead = value => dispatch => {
  dispatch({
    type: types.SEND_LEAD,
    payload: value,
  })
}
