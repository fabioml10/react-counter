import React from 'react'

export default function Button(props) {

  const handleButton = () => {
    props.onDecrement("-")
  }

  return (
    <button className="waves-effect btn red darken-4" onClick={handleButton}>{props.symbol}</button>
  )
}
