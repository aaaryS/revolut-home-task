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
  values: currencies.reduce((acc, c) => acc.set(c, null), OrderedMap())
})

const getRateFrom = ({values, to, from}) => (values.get(to) / values.get(from)).toFixed(3)
const getRateTo = ({values, to, from}) => (values.get(from) / values.get(to)).toFixed(3)

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
    'fromValue': a.payload.value * getRateTo(s)
  }),
  [rc.SET_FROM_VALUE]: (s, a) => s.merge({
    'fromValue': a.payload.value,
    'toValue': a.payload.value * getRateFrom(s),
  }),
}, initialState)
