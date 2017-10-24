import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import { sum, subtract } from './../utils/helpers'

import currencies from './../utils/currencies'

import wc from '../constants/wallet-constants'

const initialState = currencies.reduce((acc, c) => acc.set(c, '100.00'), OrderedMap())

export default handleActions({
  [wc.EXCHANGE]: (s, a) => s.merge({
    [a.payload.from]: subtract(s.get(a.payload.from), a.payload.fromValue),
    [a.payload.to]: sum(s.get(a.payload.to), a.payload.toValue)
  })

}, initialState)
