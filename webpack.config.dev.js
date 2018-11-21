"use strict";
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    // './src/app.js'
    app: ["babel-polyfill", "./src/app.js"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: "url-loader?limit=25000"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    }
    ]
  },
  devtool: "#cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
    filename: path.posix.join("./", "app.js")
    // chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ExtractTextPlugin({
    //   filename : path.posix.join('./static', 'css/style.css')
    // }),
    htmlWebpackPlugin,
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./src/assets/"),
        to: path.resolve(__dirname, "./dist/assets"),
        ignore: [".*"]
      }
    ])
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  }
};
