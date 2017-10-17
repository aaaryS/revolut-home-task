import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import { Exchange } from './../containers'

export default class App extends Component {
  render() {
    return (
     <div>
       <Exchange/>
     </div>
    )
  }
}
