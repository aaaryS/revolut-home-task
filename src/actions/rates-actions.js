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
