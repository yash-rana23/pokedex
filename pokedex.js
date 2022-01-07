import React, { Component } from 'react'
import Pokecard from './pokecard.js'
import './pokedex.css'
class Pokedex extends Component {
  render() {
    let title
    if (this.props.iswinner) {
      title = <h1 className='Pokedex-winner'>Winner!</h1>
    } else {
      title = <h1 className='pokedex-loser'>Loser!</h1>
    }
    return (
      <div className='Pokedex'>
        <h4>Total experience : {this.props.exp} </h4>
        <p>{title}</p>
        <div class='Pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              expi={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Pokedex
