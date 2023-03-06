import { async } from "@firebase/util";
import axios from "axios";
import { URL_DELETE_PRODUCT_AD } from "constants/constant";
import { URL_CREATE_PRODUCT_POST } from "constants/constant";
import { URL_UPDATE_SUBLINK } from "constants/constant";
import { URL_PAGING } from "constants/constant";
import { URL_GET_CATALOG_ACTIVE } from "constants/constant";
import { URL_ADD_TO_CART } from "constants/constant";
import { URL_CHECK_OUT } from "constants/constant";
import { URL_GET_ORDER_DETAIL } from "constants/constant";
import { URL_GET_LIST_CONFIRMED } from "constants/constant";
import { URL_UPDATE_CART } from "constants/constant";
import { URL_SIGNUP } from "constants/constant";
import { URL_DELETE_CART } from "constants/constant";
import { URL_PUT_CONFIRM_ORDER } from "constants/constant";
import { URL_GET_LIST_ORDER_CONFIRM } from "constants/constant";
import { URL_GET_CART } from "constants/constant";
import { URL_GET_PRODUCT_BY_CATALOG } from "constants/constant";
import { URL_UPDATE_PRODUCT_PUT } from "constants/constant";
import { URL_SEARCH_PRODUCT_GET } from "constants/constant";
import { URL_GET_PRODUCT_AD_INACTIVE } from "constants/constant";

import {
  URL_SIGNIN
} from "constants/constant";

import {
  URL_GET_CATALOG,
  URL_DELETE_CATALOG,
  URL_CREATE_CATALOG,
  URL_UPDATE_CATALOG,
  URL_SEARCH_CATALOG
} from "constants/constant";

import {
  URL_GET_PRODUCT_AD
} from "constants/constant";
import { Await } from "react-router-dom";
import axiosInstance from "./token";

// API-CATALOG

export const apiSignin = async (todo) => {
  return await axios.post(URL_SIGNIN, todo);
  console.log("Step 4: Gọi API GET");

}

export const API_SIGNUP= async (todo) => {
  return await axios.post(URL_SIGNUP, todo);
  

}
export const getDataCatalog = async (id) => {
  id = id || "";
  let res = await axios.get(`${URL_GET_CATALOG}/${id}`);
  return res
};
export const API_GetAllCatalog = async () => {
  let res = await axios.get(URL_GET_CATALOG);
  return res.data
};

export const API_GetCatalogActive = async () => {
  let res = await axios.get(URL_GET_CATALOG_ACTIVE)
  // console.log("list active", res.data);
  return res.data
};

export const API_GetProductByCatalog = async (id) => {
  let res = await axios.get(`${URL_GET_PRODUCT_BY_CATALOG}/${id}`);
  // console.log("Product List", res.data);
  return res.data
};

export const API_DeleteCatalog = async (id) => {
  return axios.put(`${URL_DELETE_CATALOG}/${id}`);
};
export const API_CreateCatalog = async (todo) => {
  return await axios.post(URL_CREATE_CATALOG, todo);
};
export const API_UpdateCatalog = async (id, todo) => {
  return await axios.put(`${URL_UPDATE_CATALOG}/${id}`, todo);
};

export const API_SearchCatalog = async (catalogName) => {
  let res = await axios.get(`${URL_SEARCH_CATALOG}/${catalogName}`);
  return res.data
};



// API-PRODUCT


export const getDataProductInactive = async () => {
  let res = await axios.get(URL_GET_PRODUCT_AD_INACTIVE);
  return res.data;
}
export const API_GetALLProduct = async () => {
  let res = await axios.get(URL_GET_PRODUCT_AD)
  // console.log("vao sau saga ", res.data);
  return res.data
}

export const getPageProduct = async () => {
  let res = await axios.get(URL_PAGING)
  return res.data
}

export const deleteProductss = async (productId) => {
  return axios.post(`${URL_DELETE_PRODUCT_AD}/${productId}`);
};

export const API_getProductDetail = async (productId) => {
  let res = await axios.get(`${URL_GET_PRODUCT_AD}/${productId}`);
  // console.log("data detail", res.data);
  return res.data
};

export const API_CreateProduct = async (todo) => {
  return await axios.post(URL_CREATE_PRODUCT_POST, todo);
};

export const API_SearchProduct = async (todo) => {
  let res = await axios.get(`${URL_SEARCH_PRODUCT_GET}/${todo}`);
  return res.data
};

export const API_UpdateProduct = async (id, todo) => {
  return await axios.put(`${URL_UPDATE_PRODUCT_PUT}/${id}`, todo);
};
//API-SUBLINK
export const API_UpdateCart = async (id, todo) => {
  let res = await axios.put(`${URL_UPDATE_CART}/${id}`, todo);
  console.log("API PUT ", res);
  return 
};

export const updateSubLink = async (todo) => {
  return await axios.post(URL_UPDATE_SUBLINK, todo);
};

export const API_AddToCart = async (todo) => {
  // console.log("vao api cart", todo);
  return await axios.post(URL_ADD_TO_CART,todo)
 
}
export const API_DeleteCart = async (id) => {
  let res = await axios.put(`${URL_DELETE_CART}/${id}`);
  console.log("API", res);
  return res
  
};

export const API_GET_LIST_CART = async(id) =>{
  // console.log("vao api nay get list cart", id);
  let res = await axios.get(`${URL_GET_CART}/${id}`)
  // console.log("list cart ====> ", res.data.length);
  return res.data
}

export const API_GET_ORDER_CONFIRM = async() =>{
  // console.log("vao api nay get list cart", id);
  let res = await axios.get(URL_GET_LIST_ORDER_CONFIRM)
  // console.log("API ---- list order ====> ", res.data);
  return res.data
}
export const API_GET_ORDER_CONFIRMED = async() =>{
  let res = await axios.get(URL_GET_LIST_CONFIRMED)
  // console.log("API ---- list order ====> ", res.data);
  return res.data
}

export const API_CONFIRM_ORDER = async (id) => {
  let res = await axios.put(`${URL_PUT_CONFIRM_ORDER}/${id}`);
  return res
};

export const API_GET_ORDER_DETAIL = async(id) => {
  let res = await axios.get(`${URL_GET_ORDER_DETAIL}/${id}`)
  // console.log("order detail  API ->> ", res);
  return res.data
}


export const API_CheckOut = async (todo) => {
  // console.log("VAO API CHECKOUT -> DATA : ", todo);
  return await axios.post(URL_CHECK_OUT,todo)
 
}

