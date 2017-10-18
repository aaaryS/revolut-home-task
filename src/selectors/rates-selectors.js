import { createSelector } from 'reselect'
import { List } from 'immutable'

const rates = (s = {}) => s.rates

const fromRate = createSelector([rates], (rates) => rates.values.get(rates.from))
const toRate = createSelector([rates], (rates) => rates.values.get(rates.to))

export const getExchangeRate = createSelector([fromRate, toRate], (fromRate, toRate) => (
  (toRate / fromRate).toFixed(3)
))
