// common-utilities.js/Gruntfile.js

'use strict';

// const fs = require('fs');
const path = require('path');

module.exports = grunt => {
	const packageJsonFilename = 'package.json';
	const gruntfile = grunt.file.readJSON(packageJsonFilename);
	// const textEncoding = 'utf8';
	const getWebpackConfig = (mode, libraryTarget) => {
		return {
			mode: mode,
			entry: './src/main.js',
			output: {
				path: path.join(__dirname, 'lib'),
				filename: `${ gruntfile.shortName }-webpack-${mode}-${libraryTarget}.js`,
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
												targets: {
													'chrome': '71',
													'firefox': '63',
													'ios': '10',
													'node': '10'
												}
											}
										]
									] /* ,
									plugins: [
										'transform-class-properties'
									] */
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
		eslint: {
			target: [
				'*.js',
				// 'src/*.js',
				'test/*.js',
				'lib/<%= pkg.shortName %>.es6.js'
			]
		},
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
					// 'src/intro.js',
					// 'src/main.js',
					// 'src/outro.js'
					'insertia/1.js',
					'lib/common-utilities-webpack-production-window.js',
					'insertia/2.js',
					'lib/common-utilities-webpack-production-commonjs2.js',
					'insertia/3.js'
				],
				dest: 'dist/<%= pkg.shortName %>.js'
			}
		},
		nodeunit: {
			all: ['test/*_test.js']
		},
		webpack: {
			// Possible values for libraryTarget:
			// Variable: as a global variable made available by a script tag (libraryTarget:'var').
			// This: available through the this object (libraryTarget:'this').
			// Window: available trough the window object, in the browser (libraryTarget:'window').
			// UMD: available after AMD or CommonJS require (libraryTarget:'umd').
			// devcommonjs2: getWebpackConfig('development', 'commonjs2'),
			// devwindow: getWebpackConfig('development', 'window'),
			prodcommonjs2: getWebpackConfig('production', 'commonjs2'),
			prodwindow: getWebpackConfig('production', 'window')
		}
		/*
		babel: {
			// Generate a file that nodeunit can test.
			options: {
				sourceMap: false,
				presets: [
					'@babel/preset-env' // ,
					// 'minify'
				]
			},
			dist: {
				files: {
					// 'lib/<%= pkg.shortName %>.js': 'lib/<%= pkg.shortName %>.es6.js'
					'lib/<%= pkg.shortName %>.js': 'src/main.js'
				}
			}
		},
		mochaTest: {
			options: {
				reporter: 'spec'
			},
			test: {
				src: [
					'test/*_spec.js'
				]
			}
		},
		uglify: {
			options: {
				banner: '/*\n <%= grunt.template.today(\'yyyy\') %> <%= pkg.author %>\n @version <%= pkg.version %>\n* /', // ThAW: Added a space before the last slash
				sourceMap: true,
				sourceMapIncludeSources: true
			},
			target: {
				files: {
					'lib/<%= pkg.shortName %>.min.js': ['lib/<%= pkg.shortName %>.js']
				}
			}
		}
		*/
	});

	// To build regular and non-minified pre-ES6 versions of this package:
	// $ npm i -D @babel/preset-env grunt-babel grunt-contrib-uglify
	// ... and then uncomment the 'babel' and 'uglify' tasks and their settings.

	// ThAW 2018-11-28 : We use the 'babel' task to generate the version of the package that will ne tested by 'nodeunit'
	// (until we can test the ES6 version or the Webpack version of the package with nodeunit).

	// Tasks
	// grunt.loadNpmTasks('grunt-babel');
	// grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-webpack');

	/*
	grunt.registerTask('babel-minify', 'Minifies ES2016+ code', () => {
		const data = fs.readFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.js`), textEncoding),
			minified = require('@babel/core').transform(data, {
				sourceFileName: `${ gruntfile.shortName }.es6.js`,
				sourceMaps: true,
				presets: ['minify']
			}),
			pkg = gruntfile,
			banner = '/*\n ' + new Date().getFullYear() + ' ' + pkg.author + '\n @version ' + pkg.version + '\n* /\n\"use strict\";'; // Inserted space between * and /

		fs.writeFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.min.js`), banner + minified.code + `\n//# sourceMappingURL=${ gruntfile.shortName }.es6.min.js.map`, textEncoding);
		grunt.log.ok('1 file created.');
		fs.writeFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.min.js.map`), JSON.stringify(minified.map), textEncoding);
		grunt.log.ok('1 sourcemap created.');
	});
	*/

	// Aliases
	grunt.registerTask('build', [ /* 'concat', 'babel', 'webpack:devcommonjs2', 'webpack:devwindow', */ 'webpack:prodcommonjs2', 'webpack:prodwindow', 'concat']);
	grunt.registerTask('test', ['eslint', 'nodeunit']);
	grunt.registerTask('default', ['build', 'test' /* , 'babel-minify', 'uglify' */ ]);
};
