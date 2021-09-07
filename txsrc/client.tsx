import "@babel/polyfill";
import React from "react";
import { hydrate } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

function Main() {
  // React.useEffect(() => {
  //   const jssStyle = document.querySelector("#jss-style");

  //   if (jssStyle) {
  //     console.log("Removed JSS Styles Shite");

  //     jssStyle.parentElement?.removeChild(jssStyle);
  //   }
  // }, []);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Provider store={store}>
        <App />
      </Provider>
    </StylesProvider>
  );
}

hydrate(<Main />, document.getElementById("root"), () => {
  document.getElementById("jss-style")?.remove();
});
