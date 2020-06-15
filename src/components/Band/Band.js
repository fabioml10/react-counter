import React, { Component } from 'react'

export default class Band extends Component {

  constructor() {
    super()
    this.state = {
      bandName: "Rush",
      bandMembers: [
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
    }
  }
  render() {
    const { bandName, bandMembers } = this.state
    return (
      <div>
        <h3>{bandName}</h3>
        {bandMembers.map(({name, instrument}, index) => {
          return (
            <ul>
              <li key="index">{name}</li>
              <li key="index">{instrument}</li>
            </ul>
          )
        })}
      </div>
    )
  }
}
