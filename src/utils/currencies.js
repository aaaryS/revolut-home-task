import { List, OrderedMap } from 'immutable'

export const getSymbol = currency => OrderedMap({
  'USD': '$',
  'PLN': 'zł',
  'GBP': '£',
  'EUR': '€'
}).get(currency)

export default List([
  'USD',
  'PLN',
  'GBP',
  'EUR'
])
