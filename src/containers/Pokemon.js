import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Pokemon = (props) => {
  const pokemonName = props.match.params.id
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.Pokemon);
  return <div>{pokemonName}</div>;
};

export default Pokemon;
