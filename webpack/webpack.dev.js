const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    path: path.join(__dirname, "../dist-dev/js"),
  },
});
