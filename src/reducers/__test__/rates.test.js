import test from 'ava'
import { OrderedMap } from 'immutable'

import rc from './../../constants/rates-constants'
import RatesRecord from './../../models/rates-model'

import rates from './../rates'

const initialState = RatesRecord({
  values: OrderedMap({
    'USD': 1.0,
    'EUR': 4.0
  })
})

test('set from currency', t => {
  const state = rates(
    initialState, {type: rc.SET_FROM_CURRENCY, payload: {currency: 'GBP'}}
  )
  t.is(state.from, 'GBP')
})

test('set to currency', t => {
  const state = rates(
    initialState, {type: rc.SET_TO_CURRENCY, payload: {currency: 'EUR'}}
  )
  t.is(state.to, 'EUR')
  t.is(state.from, 'USD')
})

test('set from value', t => {
  const state = rates(
    initialState, {type: rc.SET_FROM_VALUE, payload: {value: 100}}
  )
  t.is(state.fromValue, 100)
  t.is(state.toValue, '400.00')
})

test('set to value', t => {
  const state = rates(
    initialState, {type: rc.SET_TO_VALUE, payload: {value: 200}}
  )
  t.is(state.fromValue, '50.00')
  t.is(state.toValue, 200)
})
