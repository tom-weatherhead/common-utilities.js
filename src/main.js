// @tom-weatherhead/common-utilities.js/src/main.js

'use strict';

// **** Type Utilities ****

export function getTypeString (obj) {
	return Object.prototype.toString.call(obj);
}

// **** Object utilities ****

export function clone (arg) {
	return JSON.parse(JSON.stringify(arg));
}

export function isDefined (obj) {
	return typeof obj !== 'undefined';
}

export function copySpecifiedObjectProperties (propertyList, src, dst = {}) {

	propertyList.forEach(property => {

		// if (typeof src[property] !== 'undefined') {
		if (isDefined(src[property])) {
			dst[property] = src[property];
		}
	});

	return dst;
}

export function getOwnProperties (obj = {}) {
	// See https://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object
	let result = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			result.push(key);
		}
	}

	return result;
}

// **** Numeric utilities ****

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
			// (accumulator, i) => accumulator + str,
			accumulator => accumulator + str,
			''
		);
}

export function zeroPadNumber (n, minLength) {
	return (replicateString('0', minLength) + n).slice(-minLength);
}

// **** Date Utilities ****

export function getDateTimeString (date) {
	const typeStringOfParam = getTypeString(date);

	// console.log('getDateTimeString() : Type of date parameter is', typeStringOfParam);

	if (!date || typeStringOfParam !== '[object Date]') {
		// console.log('getDateTimeString() : Setting the parameter to the current date and time...');
		date = new Date();
	}

	// See https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
	// ('000' + num).slice(-4)
	// return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
	return `${date.getFullYear()}-${zeroPadNumber(date.getMonth() + 1, 2)}-${zeroPadNumber(date.getDate(), 2)} ${zeroPadNumber(date.getHours(), 2)}:${zeroPadNumber(date.getMinutes(), 2)}:${zeroPadNumber(date.getSeconds(), 2)}`;
}

// **** Array Utilities ****

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
