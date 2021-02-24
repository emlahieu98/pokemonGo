import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import {GetPokemonList} from "../actions/PokemonActions"
const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector(state => state.PokemonList)
  useEffect(() => {
    fetchData(1)
  },[])
  const fetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }
  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (<div className="list-wrapper">
        {pokemonList.data.map(item => {
          return (
            <div className="list-wrapper-item">
              <p>{item.name}</p>
              <Link to={`/pokemon/${item.name}`}>View</Link>
            </div>
          );
        })}
      </div>)
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>
    }
    if (pokemonList.errMsg !== "") {
      return <p>{pokemonList.errMsg}</p>;
    }
    return <p>unable to get data</p>
  }
  return (
    <div>
      {showData()}
    </div>
  )
}
export default PokemonList
