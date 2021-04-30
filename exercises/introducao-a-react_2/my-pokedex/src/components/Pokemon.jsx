import React from 'react';
import '../App';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, image, averageWeight } } = this.props;
    return <section className="pokemon-card">
      <div>
        <h2>{ name }</h2>
        <h4>{ type }</h4>
        <h4>{ averageWeight.value }{ averageWeight.measurementUnit }</h4>
      </div>
      <div>
        <img src={ image } alt={ name } className="imgPokemon" />
      </div>
    </section>
  }
}

export default Pokemon