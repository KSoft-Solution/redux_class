import axios from "./axios";
import { product_path } from "./constants";

//product services

export const product_services = {
  getAllProduct: () => {
    return axios.get(product_path).then((res) => res);
  },
  getProduct: (id) => {
    return axios.get(product_path + `/${id}`);
  },
};

export const cart_services = {
  getAllCart: () => {},
  getCart: (id) => {},
};
