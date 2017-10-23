import test from 'ava'
import { OrderedMap } from 'immutable'

import exchange, { getRate } from './../exchange'

const rates = OrderedMap({'USD': 1.00, 'EUR': 2.00, 'GBP': 3.00})

test('rate calculation', t => {
  const UsdEurRate = getRate('USD', 'EUR', rates)
  t.is(UsdEurRate, '2.00')

  const EurUsdRate = getRate('EUR', 'USD', rates)
  t.is(EurUsdRate, '0.50')

  const EurGbpRate = getRate('EUR', 'GBP', rates)
  t.is(EurGbpRate, '1.50')
})

test('exchange calculation', t => {

  const UsdEurExchange = exchange('USD', 'EUR', 100, rates)
  t.is(UsdEurExchange, '200.00')

  const EurUsdExchange = exchange('EUR', 'USD', 200, rates)
  t.is(EurUsdExchange, '100.00')

  const EurGbpExchange = exchange('EUR', 'GBP', 50, rates)
  t.is(EurGbpExchange, '75.00')
})
