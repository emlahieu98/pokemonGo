const DefaultState = {
  loading: false,
  data: {},
  errMsg: " ",
};
const PokemonReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POKEMON_LOAD_FAIL":
      return {
        ...state,
        loading: false,
        errMsg: "Login fail",
      };
    case "POKEMON_SUCCESS":
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    default:
      return state;
  }
};
export default PokemonReducer;
