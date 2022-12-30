import { combineReducers } from "redux";
import product_reducer from "../pages/Products/redux/reducer";

const rootReducer = combineReducers({
  productReducer: product_reducer,
});

export default rootReducer;
