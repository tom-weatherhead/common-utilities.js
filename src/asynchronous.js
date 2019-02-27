// tom-weatherhead/common-utilities.js/src/asynchronous.js

'use strict';

// From https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404 :

// const waitFor = ms => new Promise(r => setTimeout(r, ms));

export async function asyncForEach (array, callback) {

	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

/*
asyncForEach([1, 2, 3], async (num) => {
	await waitFor(50);
	console.log(num);
});

console.log('Done');
*/

export async function asyncMap (array, callback) {
	let result = [];

	for (let index = 0; index < array.length; index++) {
		result.push(await callback(array[index], index, array));
	}

	return result;
}
