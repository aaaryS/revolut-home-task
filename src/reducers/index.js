import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import rates from './rates'
import wallet from './wallet'

const rootReducer = combineReducers({
  rates,
  wallet,
  router: routerReducer
})

export default rootReducer
