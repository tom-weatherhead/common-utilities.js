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
		eslint: {
			target: [
				'*.js',
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
					'src/main.js' // ,
					// 'src/outro.js'
				],
				dest: 'lib/<%= pkg.shortName %>.es6.js'
			}
		},
		babel: {
			options: {
				sourceMap: false,
				presets: ['babel-preset-env']
			},
			dist: {
				files: {
					'lib/<%= pkg.shortName %>.js': 'lib/<%= pkg.shortName %>.es6.js'
				}
			}
		},
		nodeunit: {
			all: ['test/*.js']
		},
		uglify: {
			options: {
				banner: '/*\n <%= grunt.template.today(\'yyyy\') %> <%= pkg.author %>\n @version <%= pkg.version %>\n*/',
				sourceMap: true,
				sourceMapIncludeSources: true
			},
			target: {
				files: {
					'lib/<%= pkg.shortName %>.min.js': ['lib/<%= pkg.shortName %>.js']
				}
			}
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask('babili', 'Minifies ES2016+ code', () => {
		const data = fs.readFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.js'), textEncoding),
			minified = require('babel-core').transform(data, {
				sourceFileName: 'common-utilities.es6.js',
				sourceMaps: true,
				presets: ['minify']
			}),
			// pkg = require(path.join(__dirname, 'package.json')),
			pkg = gruntfile,
			banner = '/*\n ' + new Date().getFullYear() + ' ' + pkg.author + '\n @version ' + pkg.version + '\n*/\n\"use strict\";';

		fs.writeFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.min.js'), banner + minified.code + '\n//# sourceMappingURL=common-utilities.es6.min.js.map', textEncoding);
		grunt.log.ok('1 file created.');
		fs.writeFileSync(path.join(__dirname, 'lib', 'common-utilities.es6.min.js.map'), JSON.stringify(minified.map), textEncoding);
		grunt.log.ok('1 sourcemap created.');
	});

	// Aliases
	grunt.registerTask('test', ['eslint', 'nodeunit']);
	grunt.registerTask('build', ['concat', 'babel']);
	grunt.registerTask('default', ['build', 'test', 'babili', 'uglify']);
};
