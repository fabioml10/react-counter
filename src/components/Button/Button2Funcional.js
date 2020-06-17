import React from 'react'

export default function Button2(props) {

  const handleButton = () => {
    props.onIncrement("+")
  }

  return (
    <button className="waves-effect btn green darken-4" onClick={handleButton}>{props.symbol}</button>
  )
}
