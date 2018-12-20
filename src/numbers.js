// tom-weatherhead/common-utilities.js/src/numbers.js

'use strict';

import {
	createArrayFromElement
} from './arrays.js';

import {
	clone
} from './objects.js';

import {
	isArray,
	isArrayOfNumbers
} from './types.js';

export const fnAddition = (a, b) => a + b;
export const additiveIdentity = 0;

export const fnMultiplication = (a, b) => a * b;
export const multiplicativeIdentity = 1;

export function generateRange (start, end) {
	let result = [];

	while (start <= end) {
		result.push(start);
		start++;
	}

	return result;
}

export function generateFirstNNaturalNumbers (n) {
	return generateRange(1, n);
}

export function replicateString (str, n) {
	return generateFirstNNaturalNumbers(n)
		.reduce(
			accumulator => accumulator + str,
			''
		);
}

/*
function replicateStringAlt1 (str, n) {
	let result = [];

	while (n > 0) {
		result.push(str);
		n--;
	}

	return result;
}
*/

export function zeroPadNumber (n, minLength) {
	return (replicateString('0', minLength) + n).slice(-minLength);
}

export function zeroExtendNumber (n, minNumberOfDecimalPlaces) {
	// return (replicateString('0', minLength) + n).slice(-minLength);
	let str = n.toString();
	let indexOfDecimalPoint = str.indexOf('.');

	if (indexOfDecimalPoint < 0) {
		indexOfDecimalPoint = str.length;
		str = str + '.';
	}

	return str + replicateString('0', indexOfDecimalPoint + 1 + minNumberOfDecimalPlaces - str.length);
}

export function sum (arg) {

	if (!isArrayOfNumbers(arg)) {
		return undefined;
	}

	return arg.reduce(
		fnAddition,
		additiveIdentity
	);
}

export function product (arg) {

	if (!isArrayOfNumbers(arg)) {
		return undefined;
	}

	return arg.reduce(
		fnMultiplication,
		multiplicativeIdentity
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

/*
export function histogram (arg) {

	if (!isArray(arg)) {
		return undefined;
	}

	let result = {};

	arg.forEach(element => {
		result[element] = (result[element] || 0) + 1;
	});

	return result;
}

/* Or:
export function histogramAlt1 (arg) {
*/
export function histogram (arg) {

	if (!isArray(arg)) {
		return undefined;
	}

	return arg.reduce(
		(accumulator, element) => {
			accumulator[element] = (accumulator[element] || 0) + 1;

			return accumulator;
		},
		{}
	);
}
/* */

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

export function aToThePowerOfB (a, b) {
	return product(createArrayFromElement(a, b));
}

export function tenToThePowerOfN (n) {
	return aToThePowerOfB(10, n);
}

export function factory_fnRoundToNDigits (n) {
	const val_tenToThePowerOfN = tenToThePowerOfN(n);

	return m => Math.round(m * val_tenToThePowerOfN) / val_tenToThePowerOfN;
}

// const roundTo2Digits = factory_fnRoundToNDigits(2);
// const roundTo5Digits = factory_fnRoundToNDigits(5);
