import React from 'react'
import PropTypes from 'prop-types'

import './ExchangeButton.scss'

const ExchangeButton = ({ onClick, disabled }) => (
   <button onClick={onClick} className='exchange-button' disabled={disabled}>
     {'Exchange'}
   </button>
);

ExchangeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default ExchangeButton
