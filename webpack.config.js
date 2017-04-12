'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var GalleryPlugin = require('gallery-plugin/galleryPlugin');

module.exports = {
	context: __dirname + '/app/js',
	entry: "./index.js",

	output:{
		path: __dirname + '/production/js',
		filename: "bundle.js",
		publicPath: "/"
	},

	watch: true,

	// watchOptions:{
	// 	aggregateTimeout: 100
	// },

	// devtool: NODE_ENV == 'development' ? "source-map" : null,

	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}), 
		new GalleryPlugin()

		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 		drop_console: true,
		// 		unsafe: true
		// 	}
		// })
	],


	module: {
		loaders: [
			{
				test: /\.js$/,
	     		loader: 'babel-loader',
			    query: {
			    	presets: ['es2015']
				}
			},
			{
				test: /\.jade$/,
	     		loader: 'jade-loader' 

			},
			{
				test: /\.css$/,
	        	loader: ExtractTextPlugin.extract(
	        		{
	        			fallback: 'style-loader', 
	        			use: 'css-loader'
	        		})
			},
			{
				test: /\.scss$/, 
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.html$/, 
				loader: 'raw-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'img-loader?name=[path]/[name].[ext]'
			}
		]
	}
	// devServer: {
	// 	host: 'localhost',
	// 	port: 8080
	// }
};

	