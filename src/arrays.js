// tom-weatherhead/common-utilities.js/src/arrays.js

'use strict';

import {
	sum
} from './numbers.js';

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

export function cloneArray (array) {

	if (!isArray(array)) {
		return undefined;
	}

	return array.slice(0); // See https://davidwalsh.name/javascript-clone-array

	// How about: return isArray(array) && array.slice(0); // ?
	// Would undefined be returned if isArray(array) is falsy?
}

export function createArrayFromElement (element, length = 1, accumulator = []) {

	if (length <= 0) {
		return accumulator;
	}

	return createArrayFromElement(element, length - 1, [element, ...accumulator]);
}

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

// export function bubbleSort (array) {
// }

// export function heapSort (array) {
// }

export function insertionSort (array) {
	return array.reduce(
		(accumulator, n) => insertNumberIntoArray(n, accumulator),
		[]
	);
}

export function mergeTwoSortedArrays (array1 = [], array2 = []) {
	let index1 = 0;
	let index2 = 0;
	let result = [];

	// console.log('array1 is', array1);
	// console.log('array2 is', array2);
	// console.log('array1.length is', array1.length);
	// console.log('array2.length is', array2.length);

	while (index1 < array1.length && index2 < array2.length) {
		const element1 = array1[index1];
		const element2 = array2[index2];

		if (element1 <= element2) {
			result.push(element1);
			index1++;
		} else {
			result.push(element2);
			index2++;
		}
	}

	// console.log('After loop: index1 is', index1);
	// console.log('After loop: index2 is', index2);
	// console.log('After loop: result is', result);

	if (index1 < array1.length) {
		// Array.concat() does not modify the array in place; ot returns a new array.
		return result.concat(array1.slice(index1));
	} else if (index2 < array2.length) {
		return result.concat(array2.slice(index2));
	} else {
		return result;
	}
}

export function mergeSort (array) {

	if (array.length <= 1) {
		// console.log('Trivial: mergedArray is', array);

		return array;
	}

	const midpoint = Math.trunc(array.length / 2);

	// console.log('array is', array);
	// console.log('midpoint is', midpoint);

	const array1 = array.slice(0, midpoint);
	const array2 = array.slice(midpoint);

	// console.log('array1 is', array1);
	// console.log('array2 is', array2);

	const sortedArray1 = mergeSort(array1);
	const sortedArray2 = mergeSort(array2);

	// console.log('sortedArray1 is', sortedArray1);
	// console.log('sortedArray2 is', sortedArray2);

	const mergedArray = mergeTwoSortedArrays(sortedArray1, sortedArray2);

	// console.log('mergedArray is', mergedArray);

	return mergedArray;
}

// export function quickSort (array) {
// }

export function removeDuplicatesFromArray (array) {
	// See the discussion at https://gist.github.com/telekosmos/3b62a31a5c43f40849bb

	// JavaScript Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

	// See https://stackoverflow.com/questions/13486479/how-to-get-an-array-of-unique-values-from-an-array-containing-duplicates-in-java
	// Discussion about performace: See https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c
	// return [...new Set(array)]; // Yes. Requires ES6, since it uses the "spread" operator ("...").

	// return Array.from(new Set(array)); // Yes

	return array.reduce(
		(x, y) => x.includes(y) ? x : [...x, y],
		[]
	); // Yes. From svnpenn.
}

export function flattenOneLevel (a, b = []) {
	return a.reduce(
		(accumulator, element) => {

			if (isArray(element)) {
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

export function getRandomArrayElement (array) {

	if (!isArray(array) || !array.length) {
		return undefined;
	}

	return array[Math.floor(Math.random() * array.length)];
}

export function propertySum (array, propertyName) {

	if (!isArray(array)) {
		return undefined;
	}

	return sum(array.map(element => element[propertyName]));
}

// Categorize? Or pigeonhole?

export function categorizeArrayElementsByFunction (array, fn) {

	if (!isArray(array)) {
		return undefined;
	}

	// [...new Set(array)] : Remove duplicate elements
	// const propertyValues = [...new Set(array.map(element => fn(element)))];
	const propertyValues = removeDuplicatesFromArray(array.map(element => fn(element)));

	propertyValues.sort();

	return propertyValues.reduce(
		(accumulator, propertyValue) => {
			accumulator[propertyValue] = array.filter(element => fn(element) === propertyValue);

			return accumulator;
		},
		{}
	);
}

export function categorizeArrayElementsByFunction_version2 (array, fn) {

	if (!isArray(array)) {
		return undefined;
	}

	return array.reduce(
		(accumulator, element) => {
			const key = fn(element);

			if (!accumulator[key]) {
				accumulator[key] = [];
			}

			// Array.push() returns the length of the array after the push.
			accumulator[key].push(element);

			return accumulator;
		},
		{}
	);
}

export function categorizeArrayElementsByProperty (array, propertyName) {
	return categorizeArrayElementsByFunction(array, element => element[propertyName]);
}

export function union (...arrayOfArrays) {
	let result = [];

	arrayOfArrays.forEach(array => {

		array.forEach(element => {

			if (!result.includes(element)) {
				result.push(element);
			}
		});
	});

	return result;
}

export function getLastElementOfArray (array) {

	if (!isArray(array) || !array.length) {
		return undefined;
	}

	// From https://solidfoundationwebdev.com/blog/posts/3-methods-to-get-the-last-element-of-an-array-in-javascript :

	// return array[array.length - 1];

	// return array.pop(); // But this will remove the last element from the array.

	return array(-1)[0];
}
