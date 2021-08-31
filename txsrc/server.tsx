import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import reload from "reload";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import {
  ServerStyleSheets,
  createGenerateClassName,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { JssProvider, SheetsRegistry } from "react-jss";
import theme from "./theme";

const app = express();

const port = 3000;

const dev = process.env.NODE_ENV === "development";

app.use(express.static("public"));

if (dev) reload(app);

app.use((rec, res) => {
  const styleSheetsRegistry = new ServerStyleSheets();
  const sheetReagistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  // const sheetsManager= new Map();

  const html = renderToString(
    styleSheetsRegistry.collect(
      <JssProvider registry={sheetReagistry} generateId={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </MuiThemeProvider>
      </JssProvider>
    )
  );

  const css = styleSheetsRegistry.toString();
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
    ${dev ? `<script src='/reload/reload.js async></script>` : ""}
  </body>
</html>
    `);
});

app.listen(port, () => console.log(`http://localhost:${port}`));
