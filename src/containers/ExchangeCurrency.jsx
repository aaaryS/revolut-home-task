import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ExchangeFrom, ExchangeRate, ExchangeTo, ExchangeButton } from './../components'

import * as ratesActions from './../actions/rates-actions'

@connect((s, p) => ({
  rates: s.rates,
}),
d => ({
  ratesActions: bindActionCreators(ratesActions, d),
}))

export default class ExchangeCurrency extends Component {
  static propTypes = {

  }

  componentDidMount() {
    this.props.ratesActions.fetch()
  }

  render() {
    return (
      <div>
        <header>{'Exchange'}</header>
        <ExchangeFrom />
        <ExchangeRate />
        <ExchangeTo />
        <ExchangeButton />
      </div>
    )
  }
}
