import React from 'react'
import PropTypes from 'prop-types'

import './WalletValue.scss'

const WalletValue = ({ value, currency }) => (
  <div className='wallet-value'>
    {`You have: ${value} ${currency}`}
  </div>
)

WalletValue.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default WalletValue
