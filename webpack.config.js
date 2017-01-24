var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: "./index.js",
  output: {
    path: "./js",
    publicPath: '/js',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ]
};
