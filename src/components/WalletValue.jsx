import React from 'react'
import PropTypes from 'prop-types'

import { getSymbol } from './../utils/currencies'

import './WalletValue.scss'

const WalletValue = ({ value, currency }) => (
  <div className='wallet-value'>
    {`You have: ${value} ${getSymbol(currency)}`}
  </div>
)

WalletValue.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default WalletValue
