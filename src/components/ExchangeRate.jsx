import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ExchangeRate = ({ from, to, rate }) => (
  <div>
    {`${from} - ${rate} ${to}`}
  </div>
)

ExchangeRate.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default ExchangeRate
