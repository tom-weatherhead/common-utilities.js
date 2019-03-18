// tom-weatherhead/common-utilities.js/Gruntfile.js

'use strict';

const path = require('path');

module.exports = grunt => {
	const packageJsonFilename = 'package.json';
	const gruntfile = grunt.file.readJSON(packageJsonFilename);
	// const getWebpackConfig = (mode, libraryTarget, filenameSuffix, babelTargets) => {
	const getWebpackConfig = (mode, libraryTarget) => {
		/*
		const babelDefaultTargets = {
			'chrome': '71',
			'firefox': '63',
			'ios': '10',
			'node': '10'
		};
		 */
		const babelDefaultTargets1 = {	// For code on the server side
			'node': 'current'
		};
		const babelDefaultTargets2 = {	// For code on the client side
			// See https://github.com/browserslist/browserslist
			// 'chrome': 'last 2 versions',
			// 'firefox': 'last 2 versions',
			// 'ios': '10',
			// 'browsers': ['last 2 Chrome versions'], // This works.
			'browsers': [{
				'chrome': 'last 2 versions',
				'firefox': 'last 2 versions',
				'ios_saf': '10'
			}],
			// 'ios': '10',
			'node': 'current'
		};
		const babelTargets = libraryTarget === 'commonjs2' ? babelDefaultTargets1 : babelDefaultTargets2;

		// filenameSuffix = filenameSuffix ? `-${filenameSuffix}` : '';

		// const filename = `${ gruntfile.shortName }-webpack-${mode}-${libraryTarget}${filenameSuffix}.js`;
		const filename = `${ gruntfile.shortName }-${libraryTarget}.js`;

		return {
			mode: mode,
			entry: './src/main.js',
			target: libraryTarget === 'commonjs2' ? 'node' : undefined, // See https://stackoverflow.com/questions/43915463/webpack-node-js-http-module-http-createserver-is-not-a-function
			output: {
				// path: path.join(__dirname, 'lib'),
				path: path.join(__dirname, 'dist'),
				filename: filename,
				library: gruntfile.shortName,
				// See https://webpack.js.org/configuration/output/#output-librarytarget
				libraryTarget: libraryTarget
			},
			// plugins: [
			/*
			new HtmlWebpackPlugin({
				template: 'src/index.html'
			})
			*/
			// ],
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
										[
											'@babel/preset-env',
											{
												/* 'targets': {
													'browsers': ['last 2 Chrome versions']
													// 'browsers': ['node 10']

												} */
												// targets: '> 0.25%, not dead'
												targets: babelTargets // || babelDefaultTargets
											}
										]
									] /* ,
									plugins: [
										'transform-class-properties'
									] */

									/*
									// From https://babeljs.io/docs/en/babel-plugin-transform-classes :
									// This plugin allows a class in this package to be used as the base class
									// of a class outside of this package:

									// $ npm i -D @babel/plugin-transform-classes

									// 'loose' defaults to false:
									// 'plugins': ['@babel/plugin-transform-classes']

									'plugins': [
										['@babel/plugin-transform-classes', {
											'loose': true
										}]
									]
									 */
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
	};

	grunt.initConfig({
		pkg: gruntfile,
		concat: {
			options: {
				banner: '/**\n' +
				' * <%= pkg.name %>\n' +
				' *\n' +
				' * @copyright <%= grunt.template.today(\'yyyy\') %> <%= pkg.author %>\n' +
				' * @license <%= pkg.license %>\n' +
				' * @version <%= pkg.version %>\n' +
				' */\n'
			},
			dist: {
				src: [
					'<banner>',
					'insertia/1.js',
					// 'lib/common-utilities-webpack-production-commonjs2.js',
					'dist/common-utilities-commonjs2.js',
					'insertia/2.js',
					// 'lib/common-utilities-webpack-production-global.js',
					'dist/common-utilities-global.js',
					'insertia/3.js'
				],
				dest: 'dist/<%= pkg.shortName %>.js'
			}
		},
		eslint: {
			target: [
				'*.js',
				'src/*.js',
				'test/*.js'
			]
		},
		nodeunit: {
			all: ['test/*_test.js']
		},
		webpack: {
			// Possible values for libraryTarget: See https://webpack.js.org/configuration/output/#output-librarytarget :
			// amd, amd-require, assign, commonjs, commonjs2, global, jsonp, this, umd, var, window.
			prodcommonjs2: getWebpackConfig('production', 'commonjs2'),
			prodglobal: getWebpackConfig('production', 'global')
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-webpack');

	// Aliases
	grunt.registerTask('build', [
		'webpack:prodcommonjs2',
		'webpack:prodglobal', // We may want to use prodwindow instead.
		'concat'
	]);
	grunt.registerTask('test', ['eslint', 'nodeunit']);
	grunt.registerTask('default', ['eslint', 'build', 'concat', 'nodeunit']);
};
