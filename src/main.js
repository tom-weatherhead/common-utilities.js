// tom-weatherhead/common-utilities.js/src/main.js

'use strict';

import {
	// getTestArray,
	insertionSort,
	insertNumberIntoArray,
	removeDuplicatesFromArray
} from './arrays.js';

import {
	getDateTimeString
} from './dates.js';

import {
	safeJsonParse
} from './json.js';

import {
	generateFirstNNaturalNumbers,
	generateRange,
	histogram,
	mean,
	median,
	mode,
	replicateString,
	sum,
	zeroPadNumber
} from './numbers.js';

import {
	clone,
	copySpecifiedObjectProperties,
	getOwnProperties
} from './objects.js';

import {
	areSetsEqual,
	getAllSubsets
} from './sets.js';

import {
	getTypeString,
	isArray,
	isArrayOfNumbers,
	isDate,
	isDefined,
	isFunction,
	isNumber,
	isObject,
	isRegularExpression,
	isString
} from './types.js';

// uuid() :
// See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// See https://developer.mozilla.org/en-US/docs/Web/API/Crypto

// **** BEGIN : Adapted from avoidwork/haro ****

/*
function s () {
	return ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);
}
*/

export function uuid () {
	// From avoidwork/haro. Thank you, Jason Mulligan.
	const r = [8, 9, 'a', 'b'];
	const s = () => ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);

	return s() + s() + '-' + s() + '-4' + s().substr(0, 3) + '-' +
		r[Math.floor(Math.random() * 4)] + s().substr(0, 3) + '-' +
		s() + s() + s();
}

// **** END : Adapted from avoidwork/haro ****

export {
	// Arrays
	// getTestArray,
	insertionSort,
	insertNumberIntoArray,
	removeDuplicatesFromArray,
	// Dates
	getDateTimeString,
	// JSON
	safeJsonParse,
	// Math
	histogram,
	mean,
	median,
	mode,
	sum,
	// Numbers
	generateFirstNNaturalNumbers,
	generateRange,
	replicateString,
	zeroPadNumber,
	// Objects
	clone,
	copySpecifiedObjectProperties,
	getOwnProperties,
	// Sets
	areSetsEqual,
	getAllSubsets,
	// Types
	getTypeString,
	isArray,
	isArrayOfNumbers,
	isDate,
	isDefined,
	isFunction,
	isNumber,
	isObject,
	isRegularExpression,
	isString
};
