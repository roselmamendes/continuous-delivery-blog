var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: { path: __dirname + '/public', filename: 'bundle.js' },
  module: {
    loaders: [
  	{
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: APP_DIR
  	}
	]
  },
};
