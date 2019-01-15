const commonUtilities = require('..');

console.log('Date and time is', commonUtilities.getDateTimeString(new Date()));
// console.log('getTestArray() returns', commonUtilities.getTestArray());

commonUtilities.getJson('https://httpbin.org/json')
	.then(result => {
		console.log('getJson: result is', result);
	})
	.catch(error => {
		console.error('getJson: error is', error);
	});

