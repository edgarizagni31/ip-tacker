const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TersePlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist/'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ] 
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: 'public/index.html',
            filename: 'index.html',
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new dotenv(),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TersePlugin()
        ]
    }
}