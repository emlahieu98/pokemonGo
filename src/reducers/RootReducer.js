import {combineReducers} from 'redux'
import PokemonListReducer from './PokemonListReducer'
import PokemonReducer from "./PokemonReducer";
const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonReducer,
});
export default RootReducer
