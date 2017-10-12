import { handleActions } from 'redux-actions'
import { OrderedMap, Record } from 'immutable'

import rc from '../constants/rates-constants'

import currencies from './../utils/currencies'

const RatesRecord = Record({
  from: 'USD',
  to: 'EUR',
  fromValue: 0,
  toValue: 0,
  base: 'USD',
  rates: currencies.reduce((acc, c) => acc.set(c, null), OrderedMap())
})

const initialState = RatesRecord()

export default handleActions({
  [rc.FETCH_RATES]: (s, a) => s.set(
    'rates',
    currencies.reduce((acc, c) => acc.set(c, a.payload.rates[c]), OrderedMap())
  )
}, initialState)
