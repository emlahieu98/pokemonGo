import {combineReducers} from 'redux'
import PokemonListReducer from './PokemonListReducer'
import PokemonReducer from "./PokemonReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonReducer,
  Auth: AuthReducer,
  Cart: CartReducer,
});
export default RootReducer
