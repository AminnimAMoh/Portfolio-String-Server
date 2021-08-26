const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "cheap-module-source-map",
  output: {
      filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve:{
      alias:{
          '@material-ui/core': '@material-ui/core/es'
      }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
