import { OrderedMap, Record } from 'immutable'

import currencies from './../utils/currencies'

const RatesRecord = Record({
  from: 'USD',
  to: 'EUR',
  fromValue: '',
  toValue: '',
  base: 'USD',
  values: currencies.reduce((acc, c) => acc.set(c, null), OrderedMap())
})

export default RatesRecord
