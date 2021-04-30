import './App.css';
import Pokedex from './components/Pokedex';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>POKEDEX</h1>
      </header>
      {/* <div>{data.map((pok) => pok.name)}</div> */}
      <Pokedex pokemonData={ data }/>
    </div>
  );
}

export default App;
