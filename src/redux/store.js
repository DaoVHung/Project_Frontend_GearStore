import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import  postsSaga from "../saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(postsSaga)
export default store;