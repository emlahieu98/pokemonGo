const DefaultState = {
  loading: false,
  data: {},
  errMsg: " ",
};
const CartReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default CartReducer;
