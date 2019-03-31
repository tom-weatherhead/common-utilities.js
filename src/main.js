// tom-weatherhead/common-utilities.js/src/main.js

'use strict';

import {
	categorizeArrayElementsByFunction,
	categorizeArrayElementsByProperty,
	cloneArray,
	createArrayFromElement,
	flattenAllLevels,
	flattenOneLevel,
	getRandomArrayElement,
	// getTestArray,
	insertionSort,
	insertNumberIntoArray,
	removeDuplicatesFromArray,
	union
} from './arrays.js';

import {
	asyncForEach,
	asyncMap
} from './asynchronous.js';

import {
	getDateString,
	getDateUTCString,
	getDateTimeString,
	getDateTimeUTCString,
	getDifferenceBetweenDatesAsObject,
	getDifferenceBetweenDatesAsString
} from './dates.js';

import {
	booleanInvertFunction,
	compositeFunctions,
	curry,
	identityFunction
} from './functions.js';

import {
	getJson,
	postJson
} from './http.js';

import {
	safeJsonParse
} from './json.js';

import {
	makeLazyList
} from './lazy.js';

import {
	additiveIdentity,
	aToThePowerOfB,
	factory_fnRoundToNDigits,
	fnAddition,
	fnMultiplication,
	generateFirstNNaturalNumbers,
	generateRange,
	histogram,
	integerDivision,
	isInteger,
	mean,
	median,
	mode,
	multiplicativeIdentity,
	product,
	replicateString,
	sum,
	tenToThePowerOfN,
	zeroExtendNumber,
	zeroPadNumber
} from './numbers.js';

import {
	clone,
	combineObjects,
	copySpecifiedObjectProperties,
	getOwnProperties,
	getProperty
} from './objects.js';

import {
	areSetsEqual,
	getAllSubsets,
	isSubset
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
	categorizeArrayElementsByFunction,
	categorizeArrayElementsByProperty,
	cloneArray,
	createArrayFromElement,
	flattenAllLevels,
	flattenOneLevel,
	getRandomArrayElement,
	// getTestArray,
	insertionSort,
	insertNumberIntoArray,
	removeDuplicatesFromArray,
	union,
	// Asynchronous
	asyncForEach,
	asyncMap,
	// Dates
	getDateString,
	getDateUTCString,
	getDateTimeString,
	getDateTimeUTCString,
	getDifferenceBetweenDatesAsObject,
	getDifferenceBetweenDatesAsString,
	// Functions
	booleanInvertFunction,
	compositeFunctions,
	curry,
	identityFunction,
	// HTTP
	getJson,
	postJson,
	// JSON
	safeJsonParse,
	// Lazy
	makeLazyList,
	// Math
	histogram,
	mean,
	median,
	mode,
	sum,
	// Numbers
	additiveIdentity,
	aToThePowerOfB,
	factory_fnRoundToNDigits,
	fnAddition,
	fnMultiplication,
	generateFirstNNaturalNumbers,
	generateRange,
	integerDivision,
	isInteger,
	multiplicativeIdentity,
	product,
	replicateString,
	tenToThePowerOfN,
	zeroExtendNumber,
	zeroPadNumber,
	// Objects
	clone,
	combineObjects,
	copySpecifiedObjectProperties,
	getOwnProperties,
	getProperty,
	// Sets
	areSetsEqual,
	getAllSubsets,
	isSubset,
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
