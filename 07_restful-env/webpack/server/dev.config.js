const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: "public",
    host: "localhost",
    port: 3000
  }
});

module.exports = config;
