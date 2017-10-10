import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rates from './rates'

const rootReducer = combineReducers({
  rates,
  router: routerReducer
})

export default rootReducer
