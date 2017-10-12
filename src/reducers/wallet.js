import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import currencies from './../utils/currencies'

const initialState = currencies.reduce((acc, c) => acc.set(c, 100), OrderedMap())

export default handleActions({
  //place for managing wallet
}, initialState)
