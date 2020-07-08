import { combineReducers } from 'redux'
import { filtersReducer } from './filtersReducer'
import { modalReducer } from './modalReducers'
import { postingsReducer } from './postingsReducer'
import { leadsReducer } from './leadsReducer'

export default combineReducers({
  filters: filtersReducer,
  postings: postingsReducer,
  modals: modalReducer,
  leads: leadsReducer,
})
