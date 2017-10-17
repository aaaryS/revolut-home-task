import React from 'react'
import PropTypes from 'prop-types'

import CurrencyDropdown from './CurrencyDropdown'
import CurrencyRate from './CurrencyRate'
import WalletValue from './WalletValue'

const ExchangeCurrency = ({ currency, onCurrencyChange, onValueChange, value, walletValue }) => (
   <div>
     <CurrencyDropdown onChange={onCurrencyChange} currency={currency} />
     <CurrencyRate value={value} onChange={onValueChange}/>
     <WalletValue value={walletValue} currency={currency}/>
   </div>
);

ExchangeCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  walletValue: PropTypes.number.isRequired,
}

export default ExchangeCurrency
