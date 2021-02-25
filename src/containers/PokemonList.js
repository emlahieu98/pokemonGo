import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import { GetPokemonList } from "../actions/PokemonActions"
import ReactPaginate from "react-paginate";
import { Button, Input } from "@material-ui/core";
const PokemonList = (props) => {
  const [search, setSearch] = useState("")
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
      return <p>Loading...</p>;
    }
    if (pokemonList.errMsg !== "") {
      return <p>{pokemonList.errMsg}</p>;
    }
    return <p>unable to get data</p>
  }
  return (
    <div>
      <div className={"search-wrapper"}>
        <Input
          className={"search-wrapper-input"}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          className={"search-wrapper-button"}
          onClick={() => props.history.push(`pokemon/${search}`)}
        >
          Search
        </Button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
}
export default PokemonList
