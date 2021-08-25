const HtmlWebpackPlugin = require('html-webpack-plugin');  
var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9045,
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}