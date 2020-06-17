import React, { Component } from 'react'
import css from './counter.module.css'

import Button from '../Button/ButtonFuncional'
import Button2 from '../Button/Button2Funcional'
import Value from '../Value/ValueFuncional'
import Steps from '../Steps/StepsFuncional'

export default class Counter extends Component {
  constructor(state) {
    super()
    this.state = {
      currentCounter: 2,
      steps: 0
    }
  }

  handleMinusClick = (type) => {
    let { currentCounter, steps } = this.state
    this.setState({
      currentCounter: type === "-" ? currentCounter - 1 : currentCounter + 1,
      steps: steps + 1
    })
  }

  render() {
    const { currentCounter, steps } = this.state
    return (
      <div className={css.counterContainer}>
        <p>Counter Component RCC</p>
        <Button onDecrement={this.handleMinusClick} symbol="-" />
        <Value value={currentCounter} />
        <Button2 onIncrement={this.handleMinusClick} symbol="+" />
        <Steps steps={steps} />
      </div>
    )
  }
}
