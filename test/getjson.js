const commonUtilities = require('..');

// 	"main": "dist/common-utilities",
// 	"main": "src/main",

/*
import {
	getJson,
	postJson
} from '../src/http.js';
*/

console.log('Date and time is', commonUtilities.getDateTimeString(new Date()));
// console.log('getTestArray() returns', commonUtilities.getTestArray());

// getJson('https://httpbin.org/json')
commonUtilities.getJson('https://httpbin.org/json')
	.then(result => {
		// console.log('getJson: result is', result);
		console.log('GET: author is', result.responseJson.slideshow.author);
	})
	.catch(error => {
		console.error('getJson: error is', error);
	});

commonUtilities.postJson('https://httpbin.org/post', { name: 'Waldo', status: 'Silly' })
	.then(result => {
		// console.log('postJson: result is', result);
		console.log('POST: Status is', result.responseJson.json.status);
	})
	.catch(error => {
		console.error('postJson: error is', error);
	});
