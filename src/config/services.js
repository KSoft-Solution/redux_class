import axios from "./axios";
import { product_path, user_path } from "./constants";

//product services

export const product_services = {
  getAllProduct: () => {
    return axios.get(product_path).then((res) => res);
  },
  getProduct: (id) => {
    return axios.get(product_path + `/${id}`);
  },
};

export const user_services = {
  getAllUser:()=>{
    return axios.get(user_path).then((res) => res);
  },
  getUser:(id)=>{
    return axios.get(user_path+`${id}`).then((res) => res);
  },
}

export const cart_services = {
  getAllCart: () => {},
  getCart: (id) => {},
};
