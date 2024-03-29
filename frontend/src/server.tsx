import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import store from "@hooks/useRootInfo/store";
import { Provider } from "react-redux";
import { ServerStyleSheets, StylesProvider } from "@material-ui/core/styles";

const app = express();

const port = process.env.PORT || 3101;

app.use(express.static("public/js"));
app.use('/images', express.static("public/images"));
app.use('/fonts', express.static("public/fonts"));

app.use((rec, res) => {
  const styleSheetsRegistry = new ServerStyleSheets();

  const html = renderToString(
    styleSheetsRegistry.collect(
      <StylesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StylesProvider>
    )
  );

  const css = styleSheetsRegistry.toString();
  const preloadedState = store.getState();

  res.send(`
  <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link rel="icon" href="images/favicon.ico" />
    <link rel='icon' href='./favicon.ico' />
    <link rel='image' href='images/Button/Menu_Trigger/Power_Button-Stoke.png'/>
    <link rel='image' href='images/Button/Menu_List/ColorPalette.png'/>
    <link rel='image' href='images/Button/Menu_List/CV.png'/>
    <link rel='image' href='images/Button/Menu_List/info.png'/>
    <link rel='image' href='images/Button/Menu_List/Map.png'/>
    <link rel='image' href='images/Button/Menu_List/UI.png'/>
    <link rel='image' href='images/Button/Menu_List/UX.png'/>
    <link rel='image' href='images/Button/ScrollToTop/Top.png'/>
    <link rel='image' href='images/Containers/Content_Frame/Mobile.png'/>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Andramedian Design-Mohammad Amin Mohammadi</title>
    <style id='jss-server-side'>${css}</style>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script async>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      "\\u003c"
    )}
  </script>
    <script src='main.js' async></script>
  </body>
</html>
    `);
});

const server = app.listen(port, () =>
  console.log(`Frontend server is running on port: ${port}`)
);

process.on("uncaughtException", (error) => {
  console.error(`Uncaught exception: ${error}`);

  process.exit(1);
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Closing server...");

  server.close(() => {
    console.log("Server closed.");

    process.exit(1);
  });
});
