// tom-weatherhead/common-utilities.js/src/functions.js

'use strict';

export const identityFunction = arg => arg;

export const booleanInvertFunction = arg => !arg;

// 'Composite' as a verb, not an adjective:
export function compositeFunctions (fnArray) {

	return fnArray.reduce(
		(accumulator, element) => arg => element(accumulator(arg)),
		identityFunction
	);
}

// Function.length is the number of parameters that a function expects.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

// E.g. If fn.length === 2, then curry(fn) returns x => y => fn(x, y);

export function curry (fn, args = []) {
	return arg => {
		args.push(arg);

		if (args.length >= fn.length) {
			return fn(...args);
		}

		return curry(fn, args);
	};
}
