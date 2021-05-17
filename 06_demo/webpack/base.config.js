const path = require('path'); // outputパスに絶対パスを指定するため
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin

const SRC_ROOT = path.join(__dirname, "../client");

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve(__dirname, "./client", "index.tsx"), // ビルドを始める際の開始点となるファイルを指定. srcフォルダのindex.tsxを起点としている
  output: { // bundleファイルの出力先を指定. distフォルダのbundle.jsに吐き出すようにしている
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  module: { // 各種ローダーの設定を行う
    rules: [
      {
        test: /\.[jt]sx?$/, // jsx or tsxで終わるファイルがあればbundleファイルに追加する前にbabel-loaderで変換する
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [ // ビルドする前の変換処理にタスクを追加する
    new HtmlWebpackPlugin({ // webpackバンドルに対応するhtmlを自動生成するプラグイン
      template: path.resolve(__dirname, "../client/public/index.html"),
    }),
  ],
  resolve: { // .jsxを解決できるようにする
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
