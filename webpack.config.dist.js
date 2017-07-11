var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: false,
	devtool: 'sourcemap',
	debug: false,
	entry: path.join(__dirname, "assets/js/main.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json-loader' },
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  loaders: ['babel-loader'],
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
	  }
};