var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: false,
	devtool: 'sourcemap',
	debug: true,
	entry: path.join(__dirname, "assets/js/main.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: { 
		inline: true 
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'json-loader' },
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  loaders: ['react-hot', 'babel-loader'],
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[hash:base64:5]'
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

	    // new webpack.optimize.UglifyJsPlugin({
	    //     compress: {
	    //         warnings: false
	    //     }
	    // }),
	],
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
	  }
};