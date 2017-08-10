const path = require('path'),
webpack = require('webpack'),
loaders = require('./loaders.config');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill','./index.js'],
  output : {
       filename: 'bundle.js'},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  devServer: {
    hotOnly : true,
    contentBase: 'dist',
    port: '8085',
    host : 'delmw18187',
    disableHostCheck : true,
   historyApiFallback: true
  },
  module: {
    loaders: loaders 
  },
  
};