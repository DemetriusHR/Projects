const webpack = require("webpack");
const path = require("path");

const config = {
  context: path.resolve(__dirname, "src"),
  entry: [require.resolve("babel-polyfill"), "index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["src", "node_modules"]
  },
  module: { rules: [] },
  plugins: [],
  devServer: {
    port: 3000,
    host: "0.0.0.0"
  }
};

module.exports = config;
