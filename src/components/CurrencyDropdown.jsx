import React, { Component } from 'react'
import PropTypes from 'prop-types'

import currencies from './../utils/currencies'

import './CurrencyDropdown.scss'

const CurrencyDropdown = ({ onChange, currency }) => (
  <div className='currency-dropdown'>
    <select onChange={onChange} value={currency}>
      {currencies.map((c, key) => (
        <option value={c} key={key}>{c}</option>
      ))}
    </select>
  </div>
);

CurrencyDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
}

export default CurrencyDropdown
