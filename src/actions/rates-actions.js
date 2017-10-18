import { createAction } from 'redux-actions'
import axios from 'axios'

import rc from '../constants/rates-constants'
import config from '../config'

export const fetch = (p = {}) => (d) => {
  fetchAction(d)
  setInterval(() => fetchAction(d), config.fetchTimeout)
}

const fetchAction = async (d) => {
  const result = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${config.apiKey}`)
  d(createAction(rc.FETCH_RATES)({rates: result.data.rates}))
}

export const setFromCurrency = p => async (d, getState) => {
  await d(createAction(rc.SET_FROM_CURRENCY)(p))
  d(createAction(rc.SET_FROM_VALUE)({value: getState().rates.fromValue}))
}

export const setToCurrency = p => async (d, getState) => {
  await d(createAction(rc.SET_TO_CURRENCY)(p))
  d(createAction(rc.SET_TO_VALUE)({value: getState().rates.toValue}))
}

export const setFromValue = createAction(rc.SET_FROM_VALUE)

export const setToValue = createAction(rc.SET_TO_VALUE)
