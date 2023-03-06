import { combineReducers } from "redux";
import postsReducer from "reducer";

import logUserName from 'reducers/logUserName'
import dataCatalog from "reducers/dataCatalog";
import direction from "reducers/direction";
import dataProduct from "reducers/dataProduct";
import dataDetail from "reducers/dataDetail";
import dataOrder from "reducers/dataOrder";
import dataOrderDetail from "reducers/dataOrderDetail";
const rootReducer = combineReducers({
    posts : 
    postsReducer,
    direction,
    logUserName,
    dataCatalog,
    dataProduct,
    dataDetail,
    dataOrder,
    dataOrderDetail
})

export default rootReducer;