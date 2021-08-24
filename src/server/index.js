import express from 'express'
import React from 'react';
import renderToString from 'react-dom/server'
import App from '../shared/App'

const app= express();

app.use(express.static("public"));

app.get("*", (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Andramedian Design-Mohammad Amin Mohammadi</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
      <div id="root">${renderToString(<App/>)}</div>
      </body>
    </html>
    `)
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server up and running!!!");
})