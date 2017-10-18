import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ExchangeCurrency, ExchangeRate, ExchangeButton } from './../components'

import { getExchangeRate } from './../selectors/rates-selectors'

import * as ratesActions from './../actions/rates-actions'

@connect((s, p) => ({
  rates: s.rates,
  wallet: s.wallet,
  exchangeRate: getExchangeRate(s)
}),
d => ({
  ratesActions: bindActionCreators(ratesActions, d),
}))

export default class Exchange extends Component {
  static propTypes = {
    rates: PropTypes.object,
    exchangeRate: PropTypes.number,
  }

  componentDidMount() {
    this.props.ratesActions.fetch()
  }

  onFromCurrencyChange = (e, p = this.props) => p.ratesActions.setFromCurrency({currency: e.target.value})
  onFromValueChange = (e, p = this.props) => p.ratesActions.setFromValue({value: e.target.value})
  onToCurrencyChange = (e, p = this.props) => p.ratesActions.setToCurrency({currency: e.target.value})
  onToValueChange = (e, p = this.props) => p.ratesActions.setToValue({value: e.target.value})
  onExchange = () => console.log('exchange')

  render() {
    const { rates, wallet, exchangeRate } = this.props
    return (
      <div>
        <header>{'Exchange'}</header>
        <ExchangeCurrency
          currency={rates.from}
          onCurrencyChange={this.onFromCurrencyChange}
          onValueChange={this.onFromValueChange}
          value={rates.fromValue}
          walletValue={wallet.get(rates.from)}
          symbol='-'
        />
        <ExchangeRate
          from={rates.from}
          rate={exchangeRate}
          to={rates.to}
        />
        <ExchangeCurrency
          currency={rates.to}
          onCurrencyChange={this.onToCurrencyChange}
          onValueChange={this.onToValueChange}
          value={rates.toValue}
          walletValue={wallet.get(rates.to)}
          symbol='+'
        />
        <ExchangeButton onClick={this.onExchange}/>
      </div>
    )
  }
}
