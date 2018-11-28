/* global __dirname, require, module*/

/*
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
let libraryName = 'fork-you-webpack';

let plugins = [], outputFile;

if (env === 'build') {
	plugins.push(new UglifyJsPlugin({ minimize: true }));
	outputFile = libraryName + '.min.js';
} else {
	outputFile = libraryName + '.js';
}
// outputFile = libraryName + '.js';

const config = {
	// entry: ['./app/index.js'],
	entry: ['./src/main.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: outputFile
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude:  /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.js']
	},
	devServer:{
		port: 3000,
		contentBase: __dirname + '/build',
		inline: true
	},
	plugins: plugins
};

module.exports = config;
*/

// From https://gist.github.com/gricard/e8057f7de1029f9036a990af95c62ba8 :

/*
var webpack = require('webpack');

// use resolve() to normalize paths between unix/windows environments
var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {

    mode: 'production',

    entry: {
        // player: resolve('app/main/index.js'),
        player: resolve('src/main.js'),

        // code splitting: we take all of our vendor code and put it in a separate bundle (vendor.min.js)
        // this way it will have better caching/cache hits since it changes infrequently
        vendor: [
            // local packages
            'clipboard',
            'jquerynotify'

            // npm packages are added to vendor code separately in splitChunks config below
        ]
    },

    output: {
        // path: resolve('app/'),
        path: resolve('dist/'),
        filename: '[name].min.js'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /^(?!.*\.{test,min}\.js$).*\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    resolve: {
        modules: [
            resolve('app'),
            resolve('app/css'),
            'node_modules'
        ],

        alias: {
            // external libraries
            jquerynotify: resolve('app/js/jquery.notify.min'),
            clipboard: resolve('app/js/clipboard.min'),

            // directory alias to shorten template paths
            templates: resolve('app/templates')
        }
    },

    plugins: [
        // ensure that we get a production build of any dependencies
        // this is primarily for React, where this removes 179KB from the bundle
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ]

};
*/

// From https://github.com/sashee/from-grunt-to-webpack/blob/master/webpack.config.js :

// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		library: 'foo-library-webpack',
		// libraryTarget: 'umd'
		libraryTarget: 'window'
	},
	plugins: [
		/*
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
		*/
	],
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['latest', {'es2015': false}] // ,
								// "react",
							],
							plugins: ['transform-class-properties']
						}
					}
				]
			} /*,
			{
				test: /.css$/,
				loader: "style-loader!css-loader"
			} */
		]
	},
	devtool: 'source-map'
};
