import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SINGLE_FAILED,
  LOGIN_SINGLE_REQUEST,
  LOGIN_SINGLE_SUCCESS,
  LOGIN_SUCCESS,
} from "./constant";
import { user_services } from "../../../config/services";

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await user_services.getAllUser();

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response,
    });
  }
};
