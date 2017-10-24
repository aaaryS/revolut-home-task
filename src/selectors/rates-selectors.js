import { createSelector } from 'reselect'

import c from './../constants/rates-constants'

import { pF } from './../utils/helpers'

const rates = (s = {}) => s.rates
const wallet = (s = {}) => s.wallet
const fromValue = (s = {}) => s.rates.fromValue
const toValue = (s = {}) => s.rates.toValue
const from = (s = {}) => s.rates.from

const fromRate = createSelector([rates], (rates) => rates.values.get(rates.from))
const toRate = createSelector([rates], (rates) => rates.values.get(rates.to))
const walletFromValue = createSelector([wallet, from], (wallet, from) => wallet.get(from))

export const getExchangeRate = createSelector([fromRate, toRate], (fromRate, toRate) => (
  (toRate / fromRate).toFixed(c.CURRENCY_PRECISION)
))

export const isValidRate = createSelector([fromValue, toValue, walletFromValue],
  (fromValue, toValue, walletFromValue) => (
    pF(fromValue) > 0 && pF(toValue) > 0 && pF(fromValue) <= pF(walletFromValue)
  )
)
