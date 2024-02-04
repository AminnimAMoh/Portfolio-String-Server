const path = require("path");
const nodeExternals = require("webpack-node-externals");
const common = {
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@material-ui/core": "@material-ui/core/es",
      "@redux": path.resolve(__dirname, './txsrc/redux/'),
      "@hooks": path.resolve(__dirname, './txsrc/hooks/'),
    },
  },
};
module.exports = [
  {
    ...common,
    entry: "./txsrc/client",
    output: {
      path: `${__dirname}/public/js`,
      filename: "[name].js",
      chunkFilename: "[name].js",
      publicPath: "/"
    },
  },
  {
    ...common,
    target: "node",
    entry: "./txsrc/server",
    output: {
      path: `${__dirname}/dist`,
      filename: "[name].js",
      chunkFilename: "[name].js",
      publicPath: "/"
    },
  },
];
