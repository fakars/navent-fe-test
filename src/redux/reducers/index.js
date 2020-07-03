import { combineReducers } from 'redux'
import { filtersReducer } from './filtersReducer'
import { fetchPostingsReducer } from './postingsReducer'

export default combineReducers({
  filters: filtersReducer,
  postings: fetchPostingsReducer,
})
