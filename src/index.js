
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Admin from "Admin";
import App from "App";
import { createStore } from "redux";
// import { reducer } from "reducers";
import { Provider } from "react-redux";
import store from "redux/store";
import { MaterialUIControllerProvider } from "context";
// const store = createStore(reducer)
ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <App>
          <Admin />
        </App>
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
