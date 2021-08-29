import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
// import { createGenerateId,JssProvider } from 'react-jss';
import reload from "reload";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import {
  // MuiThemeProvider,
  ServerStyleSheets,
} from "@material-ui/core/styles";
// import theme from './theme'

const app = express();

const port = 3000;
const dev = process.env.NODE_ENV === "development";

app.use(express.static("public"));

dev && reload(app);

app.use((rec, res) => {
  const sheetsRegistry = new ServerStyleSheets();

  const html = renderToString(
    sheetsRegistry.collect(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );

  const css = sheetsRegistry.toString();
  const preloadedState = store.getState();
  
  res.send(`
    <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link rel='icon' href='./favicon.ico' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Andramedian Design-Mohammad Amin Mohammadi</title>
    <style id='jss-style'>${css}</style>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      "\\u003c"
    )}
  </script>
    <script src='main.js' async></script>
    ${dev ? `<script src='/reload/reload.js' async></script>` : ""}
  </body>
</html>
    `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
