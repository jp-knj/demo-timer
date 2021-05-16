const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_ROOT = path.join(__dirname, "../src/client");

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve("src/client", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../src/client/public/index.html"),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
