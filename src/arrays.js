// tom-weatherhead/common-utilities.js/src/arrays.js

'use strict';

import {
	clone
} from './objects.js';

import {
	isArray
} from './types.js';

/*
export function getTestArray () {
	return ['This', 'is', 'an', 'array'];
}
*/

export function insertNumberIntoArray (n, array) {
	// array must already be sorted in non-descending order.
	let i = array.findIndex(m => m >= n);

	if (i < 0) {
		i = array.length;
	}

	let result = clone(array);

	// Array.splice modifies the array in place. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	result.splice(i, 0, n);

	return result;
}

export function insertionSort (array) {
	return array.reduce(
		(accumulator, n) => insertNumberIntoArray(n, accumulator),
		[]
	);
}

export function removeDuplicatesFromArray (array) {
	// See the discussion at https://gist.github.com/telekosmos/3b62a31a5c43f40849bb

	// JavaScript Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

	// See https://stackoverflow.com/questions/13486479/how-to-get-an-array-of-unique-values-from-an-array-containing-duplicates-in-java
	// Discussion about performace: See https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c
	// return [...new Set(array)]; // Yes. Requires ES6, since it uses the "spread" operator ("...").

	// return Array.from(new Set(array)); // Yes

	// array.includes() does not exist.

	return array.reduce((x, y) => x.includes(y) ? x : [...x, y], []); // Yes. From svnpenn.
}

// TODO: Common utils: flatten an array: 1) One level; 2) All levels

export function flattenOneLevel (a, b = []) {
	return a.reduce(
		(accumulator, element) => {

			if (isArray(element)) {
				// flattenAll(element, accumulator);
				// accumulator.append(element);
				return accumulator.concat(element);
			} else {
				accumulator.push(element);

				return accumulator;
			}
		},
		b
	);
}

export function flattenAllLevels (a, b = []) {
	return a.reduce(
		(accumulator, element) => {

			if (isArray(element)) {
				flattenAllLevels(element, accumulator);
			} else {
				accumulator.push(element);
			}

			return accumulator;
		},
		b
	);
}
