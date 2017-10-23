import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ExchangeRate = ({ from, to, rate }) => (
  <div>
    {`1.00${from} - ${rate} ${to}`}
  </div>
)

ExchangeRate.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default ExchangeRate
