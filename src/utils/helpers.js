import c from './../constants/rates-constants'

export const filterCurrencyValue = v => v.replace(/[\+\-a-zA-Z]/, '')

export const sum = (a, b) => (pF(a) + pF(b)).toFixed(c.CURRENCY_PRECISION)

export const subtract = (a, b) => (pF(a) - pF(b)).toFixed(c.CURRENCY_PRECISION)

export const pF = v => parseFloat(v)
