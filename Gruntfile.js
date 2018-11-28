// @tom-weatherhead/common-utilities.js/Gruntfile.js

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = grunt => {
	const packageJsonFilename = 'package.json';
	const gruntfile = grunt.file.readJSON(packageJsonFilename);
	const textEncoding = 'utf8';

	grunt.initConfig({
		pkg: gruntfile,
		/*
		// From https://github.com/jmreidy/grunt-browserify/blob/master/examples/basic/Gruntfile.js :
		browserify: {
			vendor: {
				src: [],
				dest: 'public/vendor.js',
				options: {
					require: ['jquery'],
					alias: {
						momentWrapper: './lib/moments.js'
					}
				}
			},
			client: {
				src: ['client/** /*.js'], // ThAW: Added extra space to break up a comment token.
				dest: 'public/app.js',
				options: {
					external: ['jquery', 'momentWrapper'],
				}
			}
		},
		concat: {
			'public/main.js': ['public/vendor.js', 'public/app.js']
		}
		*/
		eslint: {
			target: [
				'*.js',
				// 'src/*.js',
				'test/*.js',
				'lib/<%= pkg.shortName %>.es6.js'
			]
		},
		/* mochaTest: {
			options: {
				reporter: 'spec'
			},
			test: {
				src: [
					'test/*_spec.js'
				]
			}
		}, */
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
					// 'src/<%= pkg.shortName %>.js',
					'src/main.js',
					'src/outro.js'
				],
				dest: 'lib/<%= pkg.shortName %>.es6.js'
			}
		},
		/*
		babel: {
			options: {
				sourceMap: false,
				presets: [
					'@babel/preset-env',
					'minify'
				]
			},
			dist: {
				files: {
					'lib/<%= pkg.shortName %>.js': 'lib/<%= pkg.shortName %>.es6.js'
				}
			}
		},
		*/
		nodeunit: {
			all: ['test/*.js']
		} /*,
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

	// Tasks
	// grunt.loadNpmTasks('grunt-babel');
	// grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask('babel-minify', 'Minifies ES2016+ code', () => {
		// NO: const data = fs.readFileSync(path.join(__dirname, 'lib', `${pkg.shortName}.es6.js`), textEncoding),
		// const data = fs.readFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.js'), textEncoding),
		const data = fs.readFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.js`), textEncoding),
			minified = require('@babel/core').transform(data, {
				// sourceFileName: 'common-utilities.es6.js',
				sourceFileName: `${ gruntfile.shortName }.es6.js`,
				sourceMaps: true,
				presets: ['minify']
			}),
			// pkg = require(path.join(__dirname, 'package.json')),
			pkg = gruntfile,
			banner = '/*\n ' + new Date().getFullYear() + ' ' + pkg.author + '\n @version ' + pkg.version + '\n*/\n\"use strict\";';

		fs.writeFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.min.js`), banner + minified.code + `\n//# sourceMappingURL=${ gruntfile.shortName }.es6.min.js.map`, textEncoding);
		// fs.writeFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.min.js'), banner + minified.code + '\n//# sourceMappingURL=common-utilities.es6.min.js.map', textEncoding);
		grunt.log.ok('1 file created.');
		fs.writeFileSync(path.join(__dirname, 'lib', `${ gruntfile.shortName }.es6.min.js.map`), JSON.stringify(minified.map), textEncoding);
		// fs.writeFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.min.js.map'), JSON.stringify(minified.map), textEncoding);
		grunt.log.ok('1 sourcemap created.');
	});

	// Aliases
	grunt.registerTask('test', ['eslint', 'nodeunit']);
	// TODO: browserify after babel?
	// Or: ['browserify', 'babel', 'concat'] ?
	// See https://www.npmjs.com/package/grunt-browserify
	// See https://github.com/jmreidy/grunt-browserify/tree/master/examples/basic
	grunt.registerTask('build', ['concat' /* , 'babel' */ ]);
	grunt.registerTask('default', ['build', 'test', 'babel-minify' /* , 'uglify' */ ]);
};
