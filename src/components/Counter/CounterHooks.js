import React, { useState } from 'react'
import css from './counter.module.css'

import Button from '../Button/ButtonFuncional'
import Button2 from '../Button/Button2Funcional'
import Value from '../Value/ValueFuncional'
import Steps from '../Steps/StepsFuncional'

export default function Counter() {

  const [currentCounter, setCurrentCounter] = useState(2)
  const [steps, setSteps] = useState(0)

  const handleMinusClick = (type) => {
    setCurrentCounter(type === "-" ? currentCounter - 1 : currentCounter + 1)
    setSteps(steps + 1)
  }

  return (
    <div className={css.counterContainer}>
      <p>Counter Component RCC</p>
      <Button onDecrement={handleMinusClick} symbol="-" />
      <Value value={currentCounter} />
      <Button2 onIncrement={handleMinusClick} symbol="+" />
      <Steps steps={steps} />
    </div>
  )
}
