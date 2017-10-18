import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CurrencyRate = ({ onChange, value, symbol }) => (
  <div>
    <span>{value > 0 && symbol}</span>
    <input value={value} onChange={onChange} type='text'/>
  </div>
)

CurrencyRate.propTypes = {
  onChange: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default CurrencyRate
