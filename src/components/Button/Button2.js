import React, { Component } from 'react'

export default class Button2 extends Component {

  handleButton = () => {
    this.props.onIncrement("+")
  }

  render() {
    return (
      <button className="waves-effect btn green darken-4" onClick={this.handleButton}>{this.props.symbol}</button>
    )
  }
}
