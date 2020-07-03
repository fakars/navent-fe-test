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
    type: types.SELECTED_FILTER,
    payload: value,
  })
}
