

import React from 'react'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currentSlide: 0}
  }


  render() {
    return (
      <div>
      <p>`cvc${this.state.currentSlide}`</p>
      </div>
    )
  }
}
