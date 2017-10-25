import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getSymbol } from './../utils/currencies'

import './ExchangeRate.scss'

const ExchangeRate = ({ from, to, rate }) => (
  <div className='exchange-rate'>
    {`1.00 ${getSymbol(from)} - ${rate} ${getSymbol(to)}`}
  </div>
)

ExchangeRate.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default ExchangeRate
