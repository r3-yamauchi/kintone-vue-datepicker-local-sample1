const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    entry: "./src/entry.js"
  },
  output: {
    filename: "./dist/main.bundle.js"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["es2015"] }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true,
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.LoaderOptionsPlugin({
  //     minimize: true
  //   })
  // ],

  devtool: process.env.NODE_ENV === "development" ? "#inline-source-map" : false

};
