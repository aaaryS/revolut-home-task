import React, { Component } from 'react'
import PropTypes from 'prop-types'

import currencies from './../utils/currencies'

const CurrencyDropdown = ({ onChange, currency }) => (
  <select onChange={onChange} value={currency}>
    {currencies.map((c, key) => (
      <option value={c} key={key}>{c}</option>
    ))}
  </select>
);

CurrencyDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
}

export default CurrencyDropdown
