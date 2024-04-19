const path = require("path");
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
      "@axios": path.resolve(__dirname, './src/axios/'),
      "@components": path.resolve(__dirname, './src/components/'),
      "@frontend-common": path.resolve(__dirname, './src/frontend-common/'),
      "@hooks": path.resolve(__dirname, './src/hooks/'),
      "@pages": path.resolve(__dirname, './src/pages/'),
    },
  },
};
module.exports = [
  {
    ...common,
    entry: "./src/client",
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
    entry: "./src/server",
    output: {
      path: `${__dirname}/dist`,
      filename: "[name].js",
      chunkFilename: "[name].js",
      publicPath: "/"
    },
  },
];
