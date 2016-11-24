var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: path.join(__dirname, "assets/js/main.js"),
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "",
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  loader: 'babel-loader',
			  query: {
			    presets: ['es2015']
			  }
			}
		]
	},
	resolve: {
		alias: {
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),

	    new webpack.optimize.UglifyJsPlugin({
	        compress: {
	            warnings: false
	        }
	    }),
	]
};