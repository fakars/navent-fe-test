import { default as types } from './types'
import { default as server } from '../../api'

export const fetchFilters = () => async dispatch => {
  const { data } = await server.get('/filters')
  dispatch({
    type: types.FETCH_FILTERS,
    payload: data,
  })
}

export const fetchPostings = () => async dispatch => {
  try {
    const { data } = await server.get('/postings')
    dispatch({
      type: types.FETCH_POSTINGS,
      payload: data,
    })
  } catch (e) {
    console.error('Unable to fetch posting list', e)
  }
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

export const activateSuccesModal = value => dispatch => {
  dispatch({
    type: types.SUCCESS_MODAL,
    payload: value,
  })
}

export const sendLead = value => dispatch => {
  dispatch({
    type: types.SEND_LEAD,
    payload: value,
  })
}

export const setFavorited = (postingId, value) => async dispatch => {
  try {
    await server.put(`/postings/${postingId}`, { favorited: value })
  } catch (e) {
    console.error('Error while setting faviorited status', e)
  }
  dispatch({
    type: types.SET_FAVORITED,
    payload: { id: postingId, favorited: value },
  })
}
