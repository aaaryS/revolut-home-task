import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { filterCurrencyValue } from './../utils/helpers'

import './CurrencyRate.scss'

const onParse = onChange => e => onChange(filterCurrencyValue(e.target.value))

const getValue = (v, s) => `${v > 0  ? s : ''}${v}`

const CurrencyRate = ({ onChange, value, symbol }) => (
  <div className='currency-rate'>
    <input
      value={getValue(value, symbol)}
      onChange={onParse(onChange)}
      type='text'
      placeholder='0'
    />
  </div>
)

CurrencyRate.propTypes = {
  onChange: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default CurrencyRate
