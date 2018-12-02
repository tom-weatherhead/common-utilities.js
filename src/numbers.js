// tom-weatherhead/common-utilities.js/src/numbers.js

'use strict';

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
