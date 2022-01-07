import React from 'react'
import './pokecard.css'
const Pokeapi =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

let padToThree = (number) => (number <= 999 ? `${number}`.slice(-3) : number)

class Pokecard extends React.Component {
  render() {
    let imgsrc = `${Pokeapi}${padToThree(this.props.id)}.png`
    return (
      <div className='pokecard'>
        <h1 className='pokecard-title'>{this.props.name}</h1>
        <div className='pokecard-img'>
          {' '}
          <img src={imgsrc} alt={this.props.name}></img>
        </div>
        <div className='pokecard-data'>Type: {this.props.type}</div>
        <div className='pokecard-data'>Exp: {this.props.expi}</div>
      </div>
    )
  }
}
export default Pokecard
