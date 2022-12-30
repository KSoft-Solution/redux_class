import { PRODUCT_FAILED, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./constant";

const initial_state = {
  loading: false,
  data: [],
  error: "",
};

const product_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading:true
      }
    case PRODUCT_SUCCESS:
      return {
        data:action.payload
      }
    case PRODUCT_FAILED:
      return {
        error:action.payload
      }
    default:
      return state;
  }
};

export default product_reducer;
