import React from 'react'
import PropTypes from 'prop-types'

const ExchangeButton = ({ onClick }) => (
   <button onClick={onClick}>
     {'ExchangeButton'}
   </button>
);

ExchangeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ExchangeButton
