import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

console.log(store);

{
  import(/* webpackChunkName: 'App'*/ "./App").then(({ default: App }) => {
    ReactDOM.hydrate(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById("root"),
      () => {
        document.getElementById("jss-style")?.remove();
      }
    );
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
