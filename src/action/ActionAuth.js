import { Exposure } from "@mui/icons-material"
import { DELETE_LIST_POST_SUCCESS } from "constants/constant"
import { DELETE_PRODUCT } from "constants/constant"
import { ACTION_GET_LIST_INACTIVE } from "constants/constant"
import { POST_LIST_POST_SUCCESS } from "constants/constant"
import { DELETE_LIST_POST } from "constants/constant"
import { getDataProductInactive } from "service/api"



// console.log("Step 2: Vào action");


export const action_signin = (value) => {
    return {
        type : 'action_signin',
        payload : value
    }
}
export const action_signup = (value) => {
  return {
      type : 'ACTION_SIGNUP',
      payload : value
  }
}

export const action_take_userName = (value) => {
    return {
        type : 'action_take_userName',
        payload : value
    }
}

export const action_reset_data = (value) => {
    return {
        type : 'action_reset_data',
        payload : value
    }
}

export const GET_LIST_PRODUCT = () => {
  // console.log("Vao sau dispatch");
  return {
      type : 'GET_LIST_PRODUCT'
  }
}
export const action_get_list_order_confirm = () => {
  // console.log("Vao sau dispatch");
  return {
      type : 'GET_LIST_ORDER_CONFIRM'
  }
}

export const action_get_list_order_confirmed = () => {
  // console.log("Vao sau dispatch");
  return {
      type : 'GET_LIST_ORDER_CONFIRMED'
  }
}

export const action_get_order_detail = (value) => {
  return {
      type : 'GET_ORDER_DETAIL',
      payload : value
  }
}

export const action_orderDetail_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}
export const action_takeUserName_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}

export const action_getAllCatalog = () => {
  // console.log(" vao buoc 1");
  return {
      type : 'GET_ALL_CATALOG'
  }
}


export const action_getCatalogActive = () => {
  return {
      type : 'GET_CATALOG_ACTIVE'
  }
}

export const action_getProductDetail = (value) => {
  // console.log("vao action");
  return {
      type : 'GET_PRODUCT_DETAIL',
      payload : value
  }
}
export const action_get_detail_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}

export const action_getProductByCatalog = (value) => {
  // console.log("vao action");
  return {
      type : 'GET_PRODUCT_BY_CATALOG',
      payload : value
  }
}
export const action_productByCatalog_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}
export const action_catalog_active_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}
export const action_catalog_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}


export const action_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}


export const getInactiveSuccess = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}

export const get_list_product_inactive = () => {
  return {
      type : ACTION_GET_LIST_INACTIVE
  }
}
export const deleteProductz = (value) => {
 
  return {
      type : "DELETE_PRODUCT",
      payload :value
  }
}
export const action_delete_catalog = (value) => {
 
  return {
      type : "DELETE_CATALOG",
      payload :value
  }
}



export const action_update_product = (productID,value) => {
  return {
      type : "UPDATE_PRODUCT",
      id :productID,
      payload:value
  }
}
export const action_update_caatalog = (catalogID,value) => {
  return {
      type : "UPDATE_CATALOG",
      id :catalogID,
      payload:value
  }
}
export const action_update_cart = (id,value) => {
  return {
      type : "UPDATE_CART",
      id :id,
      payload:value
  }
}




export const action_Create_product = (value) =>{
  return {
    type : "CREATE_PRODUCT",
    payload : value
  }
}
export const action_Create_Catalog = (value) =>{
  return {
    type : "CREATE_CATALOG",
    payload : value
  }
}

export const action_SearchProduct = (value) =>{
  return {
    type : "SEARCH_PRODUCT_API",
    payload: value
  }
}

export const action_SearchCatalog = (value) =>{
  return {
    type : "SEARCH_CATALOG_API",
    payload: value
  }
}
export const action_search_catalog_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}

export const action_get_list_cart = (value, actionType)=>{
  return {
    type : actionType,
    payload : value
  }
}

export const action_get_list_cart_success = (value, actionType)=>{
  return {
    type : actionType,
    payload : value
  }
}


export const action_search_success = (value,actionType) =>{
  return {
    type : actionType,
    payload : value
  }
}


export const action_create_catalog = (value) =>{
  return {
    type : 'CREATE_CATALOG',
    payload : value
  }
}


export const action_add_to_cart = (value) =>{
  return {
    type : 'ADD_TO_CART',
    payload : value
  }
}
export const action_delete_cart = (value) =>{
  console.log("vao action ", value);
  return {
    type : 'DELETE_CART',
    payload : value
  }
}


export const action_get_cart = (value) =>{
  return {
    type : 'GET_LIST_CART_STATE',
    payload : value
  }
}
 export const action_check_out = (value) =>{
  return {
    type : 'CHECK_OUT',
    payload : value
  }
 }
 export const action_confirm_order = (value) =>{
  
  return {
    type : 'CONFIRM_ORDER',
    payload : value
  }
 }
 



export const action_reset_data_product = (value) => {
  return {
      type : 'action_reset_data_product',
      payload : value
  }
}

export const deleteListPosts = (payload) => {
    return {
      type: DELETE_LIST_POST,
      payload,
    };
  };

export const deletePostsSuccess = (payload) => {
    return {
      type: DELETE_LIST_POST_SUCCESS,
      payload,
    };
  };
  
  export const postListPostSuccess = (payload) => {
    return {
      type: POST_LIST_POST_SUCCESS,
      payload,
    };
  };

  