var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ? [ './src/index.js' ]
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION
    ? [
            new webpack.optimize.UglifyJsPlugin({
                comments: true,
                mangle: false,
                compress: {
                   warnings: true 
                }
            })
    ]
    : [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'

        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    } 
};