// tom-weatherhead/common-utilities.js/Gruntfile.js

'use strict';

module.exports = require('thaw-config').grunt({
	eslint: true,
	mocha: false,
	webpack: true,
	forClient: true,
	forServer: true,
	dirname: __dirname
});
