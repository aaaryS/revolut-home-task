import React from 'react'
import PropTypes from 'prop-types'

const WalletValue = ({ value, currency }) => (
  <div>
    {`You have: ${value} ${currency}`}
  </div>
)

WalletValue.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default WalletValue
