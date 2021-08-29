import "@babel/polyfill";
import React from "react";
import { JssProvider } from "react-jss";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGenerateClassName } from "@material-ui/styles";
const generateId = createGenerateClassName();
console.log(generateId);
ReactDOM.hydrate(React.createElement(JssProvider, { generateId: generateId },
    React.createElement(MuiThemeProvider, { theme: theme },
        React.createElement(Provider, { store: store },
            React.createElement(App, null)))), document.getElementById("root"), () => {
    var _a;
    (_a = document.getElementById("jss-style")) === null || _a === void 0 ? void 0 : _a.remove();
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//# sourceMappingURL=client.js.map