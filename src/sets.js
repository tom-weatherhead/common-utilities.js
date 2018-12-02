// tom-weatherhead/common-utilities.js/src/sets.js

'use strict';

import {
	clone
} from './objects.js';

import {
	isArray,
	isDefined,
	isFunction
} from './types.js';

function getAllSubsetsHelper (result, arg, i, subsetInProgress) {

	if (i >= arg.length) {
		result.push(clone(subsetInProgress));
	} else {
		getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
		subsetInProgress.push(arg[i]);
		getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
		subsetInProgress.pop();
	}
}

export function getAllSubsets (arg, sortSubsets, fnSubsetComparator) {
	let result = [];

	getAllSubsetsHelper(result, arg, 0, []);

	// console.log('getAllSubsets() : arg is', arg, '; result is', result);

	if (sortSubsets) {
		const fnDefaultSubsetComparator = (s1, s2) => {
			const lengthDiff = s1.length - s2.length;

			if (lengthDiff) {
				return lengthDiff;
			}

			for (let i = 0; i < s1.length; ++i) {
				const elementDiff = s1[i] - s2[i];

				if (elementDiff) {
					return elementDiff;
				}
			}

			return 0;
		};

		result.sort(fnSubsetComparator || fnDefaultSubsetComparator);
	}

	return result;
}

function isSubset (set1, set2, fnElementsAreEqual) {
	return set1.every(element1 => isDefined(set2.find(element2 => fnElementsAreEqual(element1, element2))));
}

export function areSetsEqual (set1, set2, fnElementsAreEqual) {

	if (!isFunction(fnElementsAreEqual)) {
		fnElementsAreEqual = (a, b) => a === b;
	}

	return isArray(set1) && isArray(set2) && isSubset(set1, set2, fnElementsAreEqual) && isSubset(set2, set1, fnElementsAreEqual);
}
