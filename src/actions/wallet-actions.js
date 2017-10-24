import { createAction } from 'redux-actions'

import wc from '../constants/wallet-constants'
import rc from '../constants/rates-constants'

export const exchange = () => async (d, getState) => {
  const state = getState()
  await d(createAction(wc.EXCHANGE)({
    from: state.rates.from,
    to: state.rates.to,
    toValue: state.rates.toValue,
    fromValue: state.rates.fromValue,
  }))
  d(createAction(rc.SET_FROM_VALUE)({value: 0}))
}
