// tom-weatherhead/common-utilities.js/src/main.js

// TODO:
// - isArrayOf(fn), where fn is e.g. isNumber or isString
// ? isPrimeNumber

'use strict';

import {
	bubbleSort,
	categorizeArrayElementsByFunction,
	categorizeArrayElementsByProperty,
	cloneArray,
	createArrayFromElement,
	findSuperlativeElement,
	flattenAllLevels,
	flattenOneLevel,
	generateHierarchyOfLocalMaximaAndMinima,
	getLastElementOfArray,
	getRandomArrayElement,
	// getTestArray,
	heapSort,
	insertionSort,
	insertNumberIntoArray,
	isArrayInDecreasingOrder,
	isArrayInIncreasingOrder,
	isArrayInNonDecreasingOrder,
	isArrayInNonIncreasingOrder,
	max,
	mergeSort,
	mergeTwoSortedArrays,
	min,
	quickSort,
	removeDuplicatesFromArray
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
	correlationCoefficient,
	covariance,
	factory_fnRoundToNDigits,
	fnAddition,
	fnMultiplication,
	generateFirstNNaturalNumbers,
	generateRange,
	getSign,
	histogram,
	integerDivision,
	isInteger,
	isNonNegativeInteger,
	isNonNegativeNumber,
	isPositiveInteger,
	isPositiveNumber,
	mean,
	median,
	mode,
	multiplicativeIdentity,
	product,
	// replicateString,
	standardDeviation,
	sum,
	tenToThePowerOfN,
	zeroExtendNumber,
	zeroPadNumber
} from './numbers.js';

import {
	clone,
	combineObjects,
	copySpecifiedObjectProperties,
	deleteUndefinedValuesFromObject,
	getOwnProperties,
	getProperty
} from './objects.js';

import {
	areSetsEqual,
	getAllSubsets,
	intersection,
	isSubset,
	union
} from './sets.js';

import {
	replicateString
} from './strings.js';

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
	bubbleSort,
	categorizeArrayElementsByFunction,
	categorizeArrayElementsByProperty,
	cloneArray,
	createArrayFromElement,
	findSuperlativeElement,
	flattenAllLevels,
	flattenOneLevel,
	generateHierarchyOfLocalMaximaAndMinima,
	getLastElementOfArray,
	getRandomArrayElement,
	// getTestArray,
	heapSort,
	insertionSort,
	insertNumberIntoArray,
	isArrayInDecreasingOrder,
	isArrayInIncreasingOrder,
	isArrayInNonDecreasingOrder,
	isArrayInNonIncreasingOrder,
	max,
	mergeSort,
	mergeTwoSortedArrays,
	min,
	quickSort,
	removeDuplicatesFromArray,

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
	correlationCoefficient,
	covariance,
	factory_fnRoundToNDigits,
	fnAddition,
	fnMultiplication,
	generateFirstNNaturalNumbers,
	generateRange,
	getSign,
	integerDivision,
	isInteger,
	isNonNegativeInteger,
	isNonNegativeNumber,
	isPositiveInteger,
	isPositiveNumber,
	multiplicativeIdentity,
	product,
	standardDeviation,
	tenToThePowerOfN,
	zeroExtendNumber,
	zeroPadNumber,

	// Objects
	clone,
	combineObjects,
	copySpecifiedObjectProperties,
	deleteUndefinedValuesFromObject,
	getOwnProperties,
	getProperty,

	// Sets
	areSetsEqual,
	getAllSubsets,
	intersection,
	isSubset,
	union,

	// Strings
	replicateString,

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
