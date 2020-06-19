import React, { useState } from 'react'

const BAND_NAME = "Rush"
const BAND_MEMBERS = [
  {
    id: 1,
    name: "Neil Peart",
    instrument: "Bateria"
  },
  {
    id: 2,
    name: "Alex Peart",
    instrument: "Guitarra"
  },
  {
    id: 3,
    name: "Gaddy Lee",
    instrument: "Baixo"
  }
]
export default function Band() {

  const [bandMembers, SetBandMembers] = useState(BAND_MEMBERS)
  const [bandName, SetBandName] = useState(BAND_NAME)

  return (
    <div>
      <h3>{bandName}</h3>
      {bandMembers.map(({ name, instrument }, index) => {
        return (
          <ul>
            <li key={index}>{name}</li>
            <li key={index}>{instrument}</li>
          </ul>
        )
      })}
    </div>
  )
}
