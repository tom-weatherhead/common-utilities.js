// tom-weatherhead/common-utilities.js/src/arrays.js

'use strict';

import {
	sum
} from './numbers.js';

import {
	clone
} from './objects.js';

import {
	isArray,
	isArrayOfNumbers,
	isFunction,
	isNumber
} from './types.js';

const fnIsLessThan = (x, y) => x < y;

// export function getTestArray () {
// 	return ['This', 'is', 'an', 'array'];
// }

export function cloneArray (array) {

	if (!isArray(array)) {
		return undefined;
	}

	return array.slice(0); // See https://davidwalsh.name/javascript-clone-array

	// How about: return isArray(array) && array.slice(0); // ?
	// Would undefined be returned if isArray(array) is falsy?
}

function getSafeComparatorFunction (fnComparator) {

	if (!isFunction(fnComparator) || fnComparator.length !== 2) {
		return fnIsLessThan;
	} else {
		return fnComparator;
	}
}

// Sorting algorithm number 1: Bubble Sort

export function bubbleSort (array, fnComparator) {
	fnComparator = getSafeComparatorFunction(fnComparator);

	let changeDetected = true;

	array = cloneArray(array);

	for (let i = array.length - 1; i > 0 && changeDetected; i--) {
		changeDetected = false;

		for (let j = 0; j < i; j++) {
			const element1 = array[j];
			const element2 = array[j + 1];

			if (!fnComparator(element1, element2)) {
				array[j] = element2;
				array[j + 1] = element1;
				changeDetected = true;
			}
		}
	}

	return array;
}

// Sorting algorithm number 2: Heap Sort

// TODO? : Create a file called heaps.js ?

export function addElementToHeap (heap, element, fnComparator) {
	heap.push(element);

	// Now: Restore the heap condition throughout the heap by propagating
	// the element that is now at index heap.length - 1 up through the heap, as necessary.

	let index = heap.length - 1;

	fnComparator = getSafeComparatorFunction(fnComparator);

	while (index) {
		const nextIndex = Math.trunc((index - 1) / 2);

		const elementAtIndex = heap[index];
		const elementAtNextIndex = heap[nextIndex];

		if (!fnComparator(elementAtNextIndex, elementAtIndex)) {
			break;
		}

		// Swap the two elements:
		heap[index] = elementAtNextIndex;
		heap[nextIndex] = elementAtIndex;

		index = nextIndex;
	}

	return heap;
}

export function removeElementFromTopOfHeap (heap, fnComparator) {

	if (!heap.length) {
		return undefined;
	}

	const result = heap[0];

	const lastElement = heap.pop();

	if (!heap.length) {
		return result;
	}

	heap[0] = lastElement;

	// Now: Restore the heap condition throughout the heap by propagating lastElement
	// (i.e. the element that is now at index 0) down through the heap, as necessary.

	// The heap condition is: For all integers i where 0 <= i < heap.length :
	// 1) If 2 * i + 1 < heap.length then heap[i] >= heap[2 * i + 1], and
	// 2) If 2 * i + 2 < heap.length then heap[i] >= heap[2 * i + 2]

	// The heap condition ensures that the largest element in the heap is at index 0.

	fnComparator = getSafeComparatorFunction(fnComparator);

	let index = 0;

	while (index < heap.length) {
		const nextIndex1 = 2 * index + 1;
		const nextIndex2 = nextIndex1 + 1;

		let nextIndex;

		if (nextIndex1 >= heap.length) {
			break;
		} else if (nextIndex2 >= heap.length) {
			nextIndex = nextIndex1;
		} else if (!fnComparator(heap[nextIndex1], heap[nextIndex2])) {
			nextIndex = nextIndex1;
		} else {
			nextIndex = nextIndex2;
		}

		const elementAtIndex = heap[index];
		const elementAtNextIndex = heap[nextIndex];

		if (fnComparator(elementAtNextIndex, elementAtIndex)) {
			break;
		}

		// Swap the two elements:
		heap[index] = elementAtNextIndex;
		heap[nextIndex] = elementAtIndex;

		index = nextIndex;
	}

	return result;
}

export function heapSort (array, fnComparator) {
	let heap = array.reduce(
		(accumulator, element) => addElementToHeap(accumulator, element, fnComparator),
		[]
	);
	let result = [];

	while (heap.length) {
		result.push(removeElementFromTopOfHeap(heap, fnComparator));
	}

	return result.reverse();
}

// Sorting algorithm number 3: Insertion Sort

export function insertNumberIntoArray (n, array, fnComparator) {
	// array must already be sorted in the proper order.

	fnComparator = getSafeComparatorFunction(fnComparator);

	let i = array.findIndex(m => !fnComparator(m, n));

	if (i < 0) {
		i = array.length;
	}

	let result = clone(array);

	// Array.splice modifies the array in place. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	result.splice(i, 0, n);

	return result;
}

export function insertionSort (array, fnComparator) {
	return array.reduce(
		(accumulator, n) => insertNumberIntoArray(n, accumulator, fnComparator),
		[]
	);
}

// Sorting algorithm number 4: Merge Sort

export function mergeTwoSortedArrays (array1 = [], array2 = [], fnComparator) {
	let index1 = 0;
	let index2 = 0;
	let result = [];

	fnComparator = getSafeComparatorFunction(fnComparator);

	while (index1 < array1.length && index2 < array2.length) {
		const element1 = array1[index1];
		const element2 = array2[index2];

		if (fnComparator(element1, element2)) {
			result.push(element1);
			index1++;
		} else {
			result.push(element2);
			index2++;
		}
	}

	if (index1 < array1.length) {
		// Array.concat() does not modify the array in place; ot returns a new array.
		return result.concat(array1.slice(index1));
	} else if (index2 < array2.length) {
		return result.concat(array2.slice(index2));
	} else {
		return result;
	}
}

export function mergeSort (array, fnComparator) {

	if (array.length <= 1) {
		return array;
	}

	const midpoint = Math.trunc(array.length / 2);

	const array1 = array.slice(0, midpoint);
	const array2 = array.slice(midpoint);

	const sortedArray1 = mergeSort(array1, fnComparator);
	const sortedArray2 = mergeSort(array2, fnComparator);

	const mergedArray = mergeTwoSortedArrays(sortedArray1, sortedArray2, fnComparator);

	return mergedArray;
}

// Sorting algorithm number 5: Quicksort

export function quickSort (array, fnComparator) {

	if (array.length <= 1) {
		return array;
	}

	// const pivotElement = array.shift(); // No. Don't destroy the parameter.
	const pivotElement = array[0];
	let subArray1 = [];
	let subArray2 = [];

	fnComparator = getSafeComparatorFunction(fnComparator);

	array.slice(1).forEach(element => {

		if (fnComparator(element, pivotElement)) {
			subArray1.push(element);
		} else {
			subArray2.push(element);
		}
	});

	return quickSort(subArray1, fnComparator).concat([pivotElement]).concat(quickSort(subArray2, fnComparator));
}

export function doesConsecutiveElementsConditionHold (array, fn, defaultResult = true) {

	if (!isArray(array)) {
		return undefined;
	}

	if (array.length <= 1) {
		// The array is too short to have any consecutive elements.

		return defaultResult;
	}

	for (let i = 0; i < array.length - 1; i++) {

		if (!fn(array[i], array[i + 1])) {
			return false;
		}
	}

	return true;
}

export function isArrayInIncreasingOrder (array) {
	return doesConsecutiveElementsConditionHold(array, (x, y) => x < y, true);
}

export function isArrayInNonDecreasingOrder (array) {
	return doesConsecutiveElementsConditionHold(array, (x, y) => x <= y, true);
}

export function isArrayInDecreasingOrder (array) {
	return doesConsecutiveElementsConditionHold(array, (x, y) => x > y, true);
}

export function isArrayInNonIncreasingOrder (array) {
	return doesConsecutiveElementsConditionHold(array, (x, y) => x >= y, true);
}

export function findSuperlativeElement (array, fn) {

	if (!isArray(array) || !array.length) {
		return undefined;
	}

	return array.slice(1).reduce(
		fn,
		array[0]
	);
}

export function max (array) {
	return findSuperlativeElement(array, (x, y) => x > y ? x : y);
}

export function min (array) {
	return findSuperlativeElement(array, (x, y) => x < y ? x : y);
}

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

export function getLastElementOfArray (array) {

	if (!isArray(array) || !array.length) {
		return undefined;
	}

	// From https://solidfoundationwebdev.com/blog/posts/3-methods-to-get-the-last-element-of-an-array-in-javascript :

	// return array[array.length - 1];

	// return array.pop(); // But this will remove the last element from the array.

	return array.slice(-1)[0];
}

export function generateHierarchyOfLocalMaximaAndMinima (array) {

	if (!isArray(array)) {
		return undefined;
	}

	let result = [];

	let currentTier = array.map(element => {
		return {
			minimum: element,
			maximum: element
		};
	});

	result.unshift(currentTier);

	while (currentTier.length > 1) {
		let newTier = [];

		for (let i = 0; i < currentTier.length; i += 2) {
			const value1 = currentTier[i];
			let combinedValue;

			if (i + 1 < currentTier.length) {
				const value2 = currentTier[i + 1];

				combinedValue = {
					minimum: Math.min(value1.minimum, value2.minimum),
					maximum: Math.max(value1.maximum, value2.maximum)
				};
			} else {
				combinedValue = {
					minimum: value1.minimum,
					maximum: value1.maximum
				};
			}

			newTier.push(combinedValue);
		}

		currentTier = newTier;
		result.unshift(currentTier);
	}

	return result;
}

//  createAndFillArray(obj, d1, d2, d3, ... dn) :
// Create an n-dimensional array of size d1 x d2 x ... x dn, with all elements set to obj

export function createAndFillArray (obj, ...dimensions) {

	if (!dimensions || !dimensions.length) {
		return obj;
	}

	const result = [];
	const d1 = dimensions.shift();

	for (let i = 0; i < d1; i++) {
		result.push(createAndFillArray(obj, ...dimensions));
	}

	dimensions.unshift(d1);

	return result;
}

export function createArrayFromElement (element, length /* = 1, accumulator = [] */) {

	// if (length <= 0) {
	// 	return accumulator;
	// }

	// return createArrayFromElement(element, length - 1, [element, ...accumulator]);

	if (!isNumber(length) || length < 0) {
		return null;
	}

	return createAndFillArray(element, length);
}

export function normalizeArrayOfNumbers (array) {

	if (!isArrayOfNumbers(array) || !array.length) {
		return null;
	}

	const minValue = min(array);
	const maxValue = max(array);
	const range = maxValue - minValue;

	if (!range) {
		return null;
	}

	return array.map(n => (n - minValue) / (maxValue - minValue));
}
