//Configuration File for Webpack
//var webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const HtmlwebpackPluginConfig = new HtmlwebpackPlugin({
     template: './client/index.html',
     filename: 'index.html',
     inject: 'body'
});


module.exports = {
    entry: './client/index.js', //Path to App Entry Point
    output: {
          path : path.resolve('dist'),
          filename: 'index_bundle.js'
    },
    plugins: [HtmlwebpackPluginConfig],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
 };

