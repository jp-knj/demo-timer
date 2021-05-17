const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SRC_ROOT = path.join(__dirname, "../client");

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve("client", "index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx",],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.client.json"
          }
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../../public/index.html",
    }),
  ],
};
