import React, { Component } from 'react'

export default class Button extends Component {

  handleButton = () => {
    this.props.onDecrement("-")
  }

  render() {
    return (
      <button className="waves-effect btn red darken-4" onClick={this.handleButton}>{this.props.symbol}</button>
    )
  }
}
