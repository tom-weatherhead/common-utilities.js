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
