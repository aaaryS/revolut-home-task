import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import rc from '../constants/rates-constants'

import currencies from './../utils/currencies'
import exchange from './../utils/exchange'
import RatesRecord from './../models/rates-model'

const initialState = RatesRecord()

export default handleActions({
  [rc.FETCH_RATES]: (s, a) => s.set(
    'values',
    currencies.reduce((acc, c) => acc.set(c, a.payload.rates[c]), OrderedMap())
  ),
  [rc.SET_FROM_CURRENCY]: (s, a) => s.merge({
    'from': a.payload.currency,
    'to': a.payload.currency === s.to ? s.from : s.to
  }),
  [rc.SET_TO_CURRENCY]: (s, a) => s.merge({
    'to': a.payload.currency,
    'from': a.payload.currency === s.from ? s.to : s.from
  }),
  [rc.SET_TO_VALUE]: (s, a) => s.merge({
    'toValue': a.payload.value,
    'fromValue': exchange(s.to, s.from, a.payload.value, s.values),
  }),
  [rc.SET_FROM_VALUE]: (s, a) => s.merge({
    'fromValue': a.payload.value,
    'toValue': exchange(s.from, s.to, a.payload.value, s.values),
  }),
}, initialState)
