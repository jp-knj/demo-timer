const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/client/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: 'tsconfig.client.json'
				}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx']
	},
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/js')
	},
	plugins: [htmlWebpackPlugin]
};
