import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="app">
    <div className="titleSection">
      <h1>Pokédex App</h1>
      <input
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
        value={pokemonName.toLowerCase()}
        placeHolder="Pokémon"
      />
      <div>{pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
      </div>
    </div>
    <div className="displaySection">
      {!pokemonChosen ? (
        <h1> Please choose a Pokémon </h1>
      ) : (
        <>
          <h1 className="Capitalize">{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>Number: <span className="PokemonNumber">#{pokemon.number}</span></h3>
          <h3>
            Species: <span className="Capitalize">{pokemon.species}</span>
          </h3>
          <h3>
            Type: <span className="Capitalize">{pokemon.type}</span>
          </h3>
          <h3>Hp: <span className="PokemonNumber">{pokemon.hp}</span></h3>
          <h3>Attack: <span className="PokemonNumber">{pokemon.attack}</span></h3>
          <h3>Defense: <span className="PokemonNumber">{pokemon.defense}</span></h3>
          <h3>Speed: <span className="PokemonNumber">{pokemon.speed}</span></h3>
        </>
      )}
    </div>
  </div>
);
};
export default App;
