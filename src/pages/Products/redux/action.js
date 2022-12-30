import { PRODUCT_FAILED, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./constant";
import { product_services } from "../../../config/services";

export const productAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await product_services.getAllProduct();

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAILED,
      payload: error.response.data,
    });
  }
};
