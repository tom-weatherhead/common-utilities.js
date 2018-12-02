// tom-weatherhead/common-utilities.js/src/math.js

'use strict';

import {
	clone
} from './objects.js';

import {
	isArray,
	isArrayOfNumbers
} from './types.js';

export function sum (arg) {

	if (!isArrayOfNumbers(arg)) {
		return undefined;
	}

	return arg.reduce(
		(accumulator, n) => accumulator + n,
		0
	);
}

export function mean (arg) {

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	return sum(arg) / arg.length;
}

export function median (arg) {
	// console.log('median: arg is', arg);
	// console.log('median: getTypeString(arg) is', getTypeString(arg));

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	const sortedArray = clone(arg).sort(); // Array.sort() sorts the array *in place*

	// console.log('median: sortedArray is', sortedArray);
	// console.log('median: sortedArray.length is', sortedArray.length);

	return sortedArray[Math.floor(sortedArray.length / 2)];
}

export function histogram (arg) {

	if (!isArray(arg)) {
		return undefined;
	}

	let result = {};

	arg.forEach(element => {
		result[element] = (result[element] || 0) + 1;
	});

	return result;

	/* Or:
	return arg.reduce(
		(accumulator, element) => {
			accumulator[element] = (accumulator[element] || 0) + 1;

			return accumulator;
		},
		{}
	);
	*/
}

export function mode (arg) {
	const hist = histogram(arg);

	return Object.keys(hist).reduce(
		(accumulator, element) => {
			// console.log('mode: accumulator is', accumulator);
			// console.log('mode: element is', element);
			// console.log('mode: hist[element] is', hist[element]);

			if (hist[element] > accumulator.count) {
				accumulator = { element: element, count: hist[element] };
				// console.log('**** mode: accumulator is now', accumulator);
			}

			return accumulator;
		},
		{ element: undefined, count: 0 }
	);
}
