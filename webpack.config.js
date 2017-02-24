const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/js/Acc.js'
    },
    devtool: 'source-map',
    output: {
        library: 'Acc',
        libraryTarget: 'umd',
        filename: 'Acc.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  ]
};
