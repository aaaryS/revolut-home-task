import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ExchangeCurrency, ExchangeRate, ExchangeButton } from './../components'

import { getExchangeRate, isValidRate } from './../selectors/rates-selectors'
import { walletFromValue, walletToValue } from './../selectors/wallet-selectors'

import * as ratesActions from './../actions/rates-actions'

import './ExchangeContainer.scss'

@connect((s, p) => ({
  rates: s.rates,
  walletFromValue: walletFromValue(s),
  walletToValue: walletToValue(s),
  exchangeRate: getExchangeRate(s),
  isValidRate: isValidRate(s)
}),
d => ({
  ratesActions: bindActionCreators(ratesActions, d),
}))

export default class ExchangeContainer extends Component {
  static propTypes = {
    exchangeRate: PropTypes.string,
    isValidRate: PropTypes.bool,
    rates: PropTypes.object,
    walletFromValue: PropTypes.number,
    walletToValue: PropTypes.number,
  }

  componentDidMount() {
    this.props.ratesActions.fetch()
  }

  onFromCurrencyChange = (e, p = this.props) => p.ratesActions.setFromCurrency({currency: e.target.value})
  onFromValueChange = (value, p = this.props) => p.ratesActions.setFromValue({value})
  onToCurrencyChange = (e, p = this.props) => p.ratesActions.setToCurrency({currency: e.target.value})
  onToValueChange = (value, p = this.props) => p.ratesActions.setToValue({value})
  onExchange = () => alert('exchange')

  render() {
    const { rates, exchangeRate, isValidRate, walletToValue, walletFromValue } = this.props
    return (
      <div className='exchange'>
        <div className='exchange__currency exchange__currency--from'>
          <ExchangeCurrency
            currency={rates.from}
            onCurrencyChange={this.onFromCurrencyChange}
            onValueChange={this.onFromValueChange}
            value={rates.fromValue}
            walletValue={walletFromValue}
            symbol='-'
          />
        </div>
        <div className='exchange__rate'>
          <ExchangeRate
            from={rates.from}
            rate={exchangeRate}
            to={rates.to}
          />
        </div>
        <div className='exchange__currency exchange__currency--to'>
          <ExchangeCurrency
            currency={rates.to}
            onCurrencyChange={this.onToCurrencyChange}
            onValueChange={this.onToValueChange}
            value={rates.toValue}
            walletValue={walletToValue}
            symbol='+'
          />
        </div>
        <div className='exchange__button'>
          <ExchangeButton onClick={this.onExchange} disabled={!isValidRate}/>
        </div>
      </div>
    )
  }
}
