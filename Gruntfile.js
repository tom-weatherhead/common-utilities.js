// tom-weatherhead/common-utilities.js/Gruntfile.js

'use strict';

module.exports = require('thaw-config').grunt.eslint_webpack_concat_nodeunit({
	dirname: __dirname,
	forClient: true,
	forServer: true
});
