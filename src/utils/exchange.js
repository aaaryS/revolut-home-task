import c from './../constants/rates-constants'

export const getRate = (from, to, rates) => (
  (rates.get(to) / rates.get(from)).toFixed(c.CURRENCY_PRECISION)
)

const exchange = (from, to, value, rates) => (
  (getRate(from, to, rates) * value).toFixed(c.CURRENCY_PRECISION)
)

export default exchange
