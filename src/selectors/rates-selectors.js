import { createSelector } from 'reselect'

import c from './../constants/rates-constants'

const rates = (s = {}) => s.rates
const fromValue = (s = {}) => s.rates.fromValue
const toValue = (s = {}) => s.rates.toValue

const fromRate = createSelector([rates], (rates) => rates.values.get(rates.from))
const toRate = createSelector([rates], (rates) => rates.values.get(rates.to))

export const getExchangeRate = createSelector([fromRate, toRate], (fromRate, toRate) => (
  (toRate / fromRate).toFixed(c.CURRENCY_PRECISION)
))

export const isValidRate = createSelector([fromValue, toValue], (fromValue, toValue) => (
  fromValue > 0 && toValue > 0
))
