//Configuration File for Webpack

const path = require('path');

const HtmlwebpackPlugin = require('html-webpack-plugin');
const HtmlwebpackPluginConfig = new HtmlwebpackPlugin({
     template: './client/index.html',
     filename: 'index.html',
     inject: 'body'
});
const DIST_DIR = path.join(__dirname,'dist');

module.exports = {
    entry: './client/index.js', //Path to index.js
    output: {
          path : DIST_DIR,
          filename: 'index.bundle.js'
    },
    plugins: [new HtmlwebpackPlugin()],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/,loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
 };

