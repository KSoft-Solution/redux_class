import { combineReducers } from "redux";
import product_reducer from "../pages/Products/redux/reducer";
import user_reducer from "../pages/Login/redux/reducer";

const rootReducer = combineReducers({
  productReducer: product_reducer,
  userReducer: user_reducer,
});

export default rootReducer;
