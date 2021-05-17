const baseConfig = require("./base.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8000
  }
});

module.exports = config;
