import { jsx as _jsx } from "react/jsx-runtime";
import "@babel/polyfill";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
const App = lazy(() => import("./App"));
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(Provider, Object.assign({ store: store }, { children: _jsx(Suspense, Object.assign({ fallback: "Loading..." }, { children: _jsx(App, {}, void 0) }), void 0) }), void 0) }, void 0), document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//# sourceMappingURL=index.js.map