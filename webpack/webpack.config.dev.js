var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: [
      'webpack-hot-middleware/client',
      path.join(__dirname, '..', 'src', 'app')
   ],
   output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: "main.js",
      publicPath: "/dist/"
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
   ],
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
         }
      ]
   },
};
