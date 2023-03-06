import { yellow } from "@mui/material/colors";
import { getInactiveSuccess } from "action/ActionAuth";
import { action_catalog_success } from "action/ActionAuth";
import { action_search_success } from "action/ActionAuth";
import { action_catalog_active_success } from "action/ActionAuth";
import { action_get_detail_success } from "action/ActionAuth";
import { action_get_list_cart_success } from "action/ActionAuth";
import { action_orderDetail_success } from "action/ActionAuth";
import { action_get_list_cart } from "action/ActionAuth";
import { action_productByCatalog_success } from "action/ActionAuth";
import { action_search_catalog_success } from "action/ActionAuth";
import { action_success } from "action/ActionAuth";
import { ACTION_GET_LIST_INACTIVE } from "constants/constant";
import { useNavigate } from "react-router-dom";
import { call, put, takeLatest, all, fork, take } from "redux-saga/effects";
import { API_UpdateCatalog } from "service/api";
import { API_CheckOut } from "service/api";
import { API_CONFIRM_ORDER } from "service/api";
import { API_DeleteCart } from "service/api";
import { API_SIGNUP } from "service/api";
import { API_UpdateCart } from "service/api";
import { API_GET_ORDER_CONFIRMED } from "service/api";
import { API_GET_ORDER_DETAIL } from "service/api";
import { API_GET_ORDER_CONFIRM } from "service/api";
import { API_AddToCart } from "service/api";
import { API_GET_LIST_CART } from "service/api";
import { API_getProductDetail } from "service/api";
import { API_GetProductByCatalog } from "service/api";
import { API_GetCatalogActive } from "service/api";
import { API_SearchCatalog } from "service/api";
import { API_DeleteCatalog } from "service/api";
import { API_CreateCatalog } from "service/api";
import { API_GetAllCatalog } from "service/api";
import { deleteProductss } from "service/api";
import { API_UpdateProduct } from "service/api";
import { API_GetALLProduct } from "service/api";
import { API_SearchProduct } from "service/api";
import { API_CreateProduct } from "service/api";
import { getDataProductInactive } from "service/api";
import { getPageProduct } from "service/api";

//  console.log("Step 3: Vào saga, gọi API"); 
function* deletePostsData(action) {
    const res = yield call(deleteProductss, action.payload);
    if (res.data.productStatus == true) {
        yield getProductInactive()
    } else {
        yield getAllProduct();
    }
}

function* deleteCatalog(action) {
    yield call(API_DeleteCatalog, action.payload)
    yield getAllCatalog()
}

function* getProductInactive() {
    let listProduct = yield call(getDataProductInactive);
    yield put(getInactiveSuccess(listProduct, "get_inacive_succes"))
}
function* getAllProduct() {
    // console.log("vao sau action");
    let listProduct = yield call(API_GetALLProduct)
    yield put(action_success(listProduct, "get_success"))
}

function* createProduct(action) {
    yield call(API_CreateProduct, action.payload)
    yield getAllProduct()
}

function* createCatalog(action) {
    yield call(API_CreateCatalog, action.payload)
    yield getAllCatalog()
}

function* updateProduct(action) {
    yield call(API_UpdateProduct, action.id, action.payload)
    yield getAllProduct()
}

function* updateCatalog(action) {
    yield call(API_UpdateCatalog, action.id, action.payload)
    yield getAllCatalog()
}
function* funtionUpdateCart(action) {
    yield call(API_UpdateCart,action.id,action.payload)
    const users = JSON.parse(localStorage.getItem('user'))
    let listCart = yield call(API_GET_LIST_CART, users.userId)
    if (listCart != "") {
        var subTotal = 0;
        listCart.forEach(cart => {
            subTotal += cart.totalAmount
        });
        localStorage.setItem('total', subTotal)
    }else{
        localStorage.setItem('total', 0)
    }
    yield put(action_get_list_cart(listCart, 'GET_LIST_STATE'))
}

function* searchProductSAGA(action) {
    if (action.payload == "") {
        return
    }
    let listProducts = yield call(API_SearchProduct, action.payload)
    yield put(action_search_success(listProducts, "getDataSearch"))
}
function* searchCatalogSaga(action) {
    if (action.payload == "") {
        return
    }
    let listSearch = yield call(API_SearchCatalog, action.payload)
    yield put(action_search_catalog_success(listSearch, "GET_LIST_SEARCH_CATALOG"))
}


function* getAllCatalog() {
    // console.log("vao saga");
    let listCatalog = yield call(API_GetAllCatalog);
    // console.log("list catalog ", listCatalog);
    yield put(action_catalog_success(listCatalog, "GET_DATA_CATALOG"))

}
function* getCatalogActive() {
    let listActive = yield call(API_GetCatalogActive)
    yield put(action_catalog_active_success(listActive, "GET_LIST_ACTIVE"))

}

function* getProductByCatalog(action) {
    let listProduct = yield call(API_GetProductByCatalog, action.payload)
    // console.log("LIST IN SAGA", listProduct);
    yield put(action_productByCatalog_success(listProduct, "GET_BY_CATALOG_SUCCESS"))

}
function* getProductDetail(action) {
    let product = yield call(API_getProductDetail, action.payload)
    // console.log("Vao SAGA detail", product);
    yield put(action_get_detail_success(product, "GET_DETAIL_COMPLETE"))

}

function* functionAddToCart(action) {
    // console.log("vao saga cart", action);
    let order = yield call(API_AddToCart, action.payload)
    let listCart = yield call(API_GET_LIST_CART, action.payload.userID)
    if (listCart != "") {
        var subTotal = 0;
        listCart.forEach(cart => {
            subTotal += cart.totalAmount
        });
        localStorage.setItem('total', subTotal)
    }else{
        localStorage.setItem('total', 0)
    }
    yield put(action_get_list_cart(listCart, 'GET_LIST_STATE'))

}
function* functionGetListCart(action) {
    if (action.payload == "") {
        return
    }
    let listCart = yield call(API_GET_LIST_CART, action.payload)
    if (listCart != "") {
        var subTotal = 0;
        listCart.forEach(cart => {
            subTotal += cart.totalAmount
        });
        localStorage.setItem('total', subTotal)
    }else{
        localStorage.setItem('total', 0)
    }
    yield put(action_get_list_cart_success(listCart, 'GET_LIST_STATE'))
}
function* funtionCheckout(action) {
    yield call(API_CheckOut, action.payload)
    let listCart = yield call(API_GET_LIST_CART, action.payload.userID)
    if (listCart != "") {
        var subTotal = 0;
        listCart.forEach(cart => {
            subTotal += cart.totalAmount
        });
        localStorage.setItem('total', subTotal)
    } else {
        localStorage.setItem('total', 0)
    }
    yield put(action_get_list_cart(listCart, 'GET_LIST_STATE'))
}

function* funtionGetListOrder() {
    let listOrder = yield call(API_GET_ORDER_CONFIRM)
    yield put(action_get_list_cart(listOrder, 'GET_LIST_STATE'))
}

function* funtionGetListOrderConfirmed() {
    let listOrder = yield call(API_GET_ORDER_CONFIRMED)
    yield put(action_get_list_cart(listOrder, 'GET_LIST_STATE'))
}

function* funtionGetOrderDetail(action) {
    let orderDetail = yield call(API_GET_ORDER_DETAIL, action.payload)
    yield put(action_get_detail_success(orderDetail,'LIST_ORDER_DETAIL'))
}
function* funtionConfirmOrder(action) {
    let res = yield call(API_CONFIRM_ORDER, action.payload)
    yield funtionGetListOrder()
}
function* funtionDeleteCart(action) {
    console.log("vao saga", action);
    let res = yield call(API_DeleteCart, action.payload)
    console.log("res", res);
    const users = JSON.parse(localStorage.getItem('user'))
    let listCart = yield call(API_GET_LIST_CART, users.userId)
    if (listCart != "") {
        var subTotal = 0;
        listCart.forEach(cart => {
            subTotal += cart.totalAmount
        });
        localStorage.setItem('total', subTotal)
    }else{
        localStorage.setItem('total', 0)
    }
    yield put(action_get_list_cart_success(listCart, 'GET_LIST_STATE'))
}

function* funtionSignup(action){
    console.log("vao saga signup", action);
    let res = yield call(API_SIGNUP,action.payload)
    console.log("res------>",res.data);
    localStorage.setItem('user', JSON.stringify(res.data))
    
    
    
}


function* postsSaga() {
    yield all([
        takeLatest('GET_LIST_PRODUCT', getAllProduct),
        takeLatest(ACTION_GET_LIST_INACTIVE, getProductInactive),
        takeLatest("DELETE_PRODUCT", deletePostsData),
        takeLatest("CREATE_PRODUCT", createProduct),
        takeLatest("UPDATE_PRODUCT", updateProduct),
        takeLatest("SEARCH_PRODUCT_API", searchProductSAGA),
        takeLatest('GET_ALL_CATALOG', getAllCatalog),
        takeLatest('CREATE_CATALOG', createCatalog),
        takeLatest('UPDATE_CATALOG', updateCatalog),
        takeLatest('DELETE_CATALOG', deleteCatalog),
        takeLatest('SEARCH_CATALOG_API', searchCatalogSaga),
        takeLatest('GET_CATALOG_ACTIVE', getCatalogActive),
        takeLatest('GET_PRODUCT_BY_CATALOG', getProductByCatalog),
        takeLatest('GET_PRODUCT_DETAIL', getProductDetail),
        takeLatest('ADD_TO_CART', functionAddToCart),
        takeLatest('GET_LIST_CART_STATE', functionGetListCart),
        takeLatest('CHECK_OUT', funtionCheckout),
        takeLatest('GET_LIST_ORDER_CONFIRM', funtionGetListOrder),
        takeLatest('GET_LIST_ORDER_CONFIRMED', funtionGetListOrderConfirmed),
        takeLatest('GET_ORDER_DETAIL', funtionGetOrderDetail),
        takeLatest('CONFIRM_ORDER', funtionConfirmOrder),
        takeLatest('DELETE_CART', funtionDeleteCart),
        takeLatest('UPDATE_CART',funtionUpdateCart),
        takeLatest('ACTION_SIGNUP', funtionSignup)
    ])
}

export default postsSaga