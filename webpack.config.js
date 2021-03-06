//Configuration File for Webpack
//var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/client.js', //Path to App Entry Point
    output: {
          path : path.resolve('public/dist'),
          filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/,loader: 'less-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
          
                ]
    }
 };

