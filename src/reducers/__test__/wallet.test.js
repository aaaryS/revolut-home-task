import test from 'ava'
import { OrderedMap } from 'immutable'

import wc from './../../constants/wallet-constants'

import wallet from './../wallet'

const initialState = OrderedMap({
  'USD': '100.00',
  'EUR': '100.00'
})

test('exchange currency', t => {
  const state = wallet(
    initialState, {
      type: wc.EXCHANGE,
      payload: {
        from: 'USD',
        to: 'EUR',
        fromValue: '10.00',
        toValue: '20.00'
      }
    }
  )
  t.is(state.get('USD'), '90.00')
  t.is(state.get('EUR'), '120.00')
})
