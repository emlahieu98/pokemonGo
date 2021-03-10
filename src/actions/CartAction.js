export const addCart = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LOADING",
    });
    dispatch({
      type: "ADD_SUCCESS",
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: "ADD_FAIL",
    });
  }
};
