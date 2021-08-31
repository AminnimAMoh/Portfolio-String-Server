import "@babel/polyfill";
import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { JssProvider } from "react-jss";
import {
  createGenerateClassName,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import theme from './theme'

function Main() {
  React.useEffect(() => {
    const jssStyle = document.querySelector("#jss-style");

    if (jssStyle) {
      jssStyle.parentElement?.removeChild(jssStyle);
    }
  }, []);

  const generateClassName = createGenerateClassName();

  return (
    <JssProvider generateId={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  );
}

hydrate(<Main />, document.getElementById("root"));
