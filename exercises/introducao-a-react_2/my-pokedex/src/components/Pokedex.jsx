import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonData } = this.props
    return <section className="all-pokemon-cards">
      {pokemonData.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
    </section>
  }
}

export default Pokedex