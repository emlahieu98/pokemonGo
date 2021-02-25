import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/PokemonActions";
import _ from "lodash";
const Pokemon = (props) => {
  const pokemonName = props.match.params.id
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);
    const showData = () => {
      if (!_.isEmpty(pokemon.data[pokemonName])) {
        const pokemonItem = pokemon.data[pokemonName];
        console.log(pokemonItem);
        return (
          <div className={"pokemon-wrapper"}>
            <div className={"item"}>
              <h3>Spires</h3>
              <img src={pokemonItem.sprites.front_default} />
              <img src={pokemonItem.sprites.front_shiny} />
              <img src={pokemonItem.sprites.back_default} />
              <img src={pokemonItem.sprites.back_shiny} />
            </div>
            <div className={"item"}>
              <h3>Stats</h3>
              {pokemonItem.stats.map((item) => {
                return (
                  <div className="">
                    <p>{item.stat.name}</p>
                    <p>{item.base_stat}</p>
                  </div>
                );
              })}
            </div>
            <div className={"item"}>
              <h3>Abilities</h3>
              {pokemonItem.abilities.map((item) => {
                return (
                  <div className="">
                    <p>{item.ability.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
      if (pokemon.loading) {
        return <p>Loading...</p>;
      }
      if (pokemon.errMsg !== "") {
        return <p>{pokemon.errMsg}</p>;
      }
      return <p>unable to get data</p>;
    };
  return (
    <div className={"poke"}>
      <p className="name">{pokemonName}</p>
      {showData()}
    </div>
  );
};

export default Pokemon;
