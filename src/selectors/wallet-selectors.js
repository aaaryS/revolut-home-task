import { createSelector } from 'reselect'

const wallet = (s = {}) => s.wallet
const rateFrom = (s = {}) => s.rates.from
const rateTo = (s = {}) => s.rates.to

export const walletFromValue = createSelector([wallet, rateFrom], (wallet, rateFrom) => (
  wallet.get(rateFrom) || 0
))

export const walletToValue = createSelector([wallet, rateTo], (wallet, rateTo) => (
  wallet.get(rateTo) || 0
))
