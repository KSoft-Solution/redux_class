import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SINGLE_FAILED,
  LOGIN_SINGLE_REQUEST,
  LOGIN_SINGLE_SUCCESS,
  LOGIN_SUCCESS,
} from "./constant";

const initial_state = {
  loading: false,
  users: [],
  error: "",
};

const user_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        users: action.payload,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default user_reducer
