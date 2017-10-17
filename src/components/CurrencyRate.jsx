import React, { Component } from 'react'
import PropTypes from 'prop-types'

const CurrencyRate = ({ onChange, value }) => (
  <input value={value} onChange={onChange} type='text'/>
)

CurrencyRate.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default CurrencyRate
