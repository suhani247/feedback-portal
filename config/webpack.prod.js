const path = require('path'),
webpack = require('webpack'),
loaders = require('./loaders.config');

module.exports = {
  entry: ['babel-polyfill','./index.js'],
  output : {
       path : path.join(__dirname,'/../dist'),
       filename: 'bundle.js'},
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, //prod
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      }, //prod
      compress: {
        screw_ie8: true
      }, //prod
      comments : false
    })
  ],
  module: {
    loaders: loaders 
  }
  
};