const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const glob = require('glob');
module.exports = {
    entry: {
        script: path.resolve(__dirname, './src/inex.js'),
        style: glob.sync(path.resolve(__dirname, './srs/css/*.*')),
        images: glob.sync(path.resolve(__dirname, './crs/media/**/*.*')),
    },
    context: __dirname,
    output: {
        path: path.resolve('./src/'),
        publicPath: '/dist/assets',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
            },
            {
                test: /(\.woff2?|\.woff|\.ttf|\.eot|\.svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=[name]-[hash:6].[ext]',
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('index.css' /* optional: , { allChunks: true } */),
    ],
};