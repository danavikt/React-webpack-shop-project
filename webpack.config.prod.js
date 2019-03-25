const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
