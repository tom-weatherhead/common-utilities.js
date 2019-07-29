// tom-weatherhead/common-utilities.js/src/numbers.js

'use strict';

import {
	createArrayFromElement
} from './arrays.js';

import {
	clone
} from './objects.js';

import {
	replicateString
} from './strings.js';

import {
	isArray,
	isArrayOfNumbers,
	isNumber
} from './types.js';

export const fnAddition = (a, b) => a + b;
export const additiveIdentity = 0;

export const fnMultiplication = (a, b) => a * b;
export const multiplicativeIdentity = 1;

export function getSign (n) {

	if (!isNumber(n)) {
		return undefined;
	} else if (n > 0) {
		return 1;
	} else if (n < 0) {
		return -1;
	} else {
		return 0;
	}
}

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

// export function replicateString (str, n) {
// 	return generateFirstNNaturalNumbers(n)
// 		.reduce(
// 			accumulator => accumulator + str,
// 			''
// 		);
// }

export function zeroPadNumber (n, minLength) {
	return (replicateString('0', minLength) + n).slice(-minLength);
}

export function zeroExtendNumber (n, minNumberOfDecimalPlaces) {
	// return (replicateString('0', minLength) + n).slice(-minLength);
	let str = n.toString();
	let indexOfDecimalPoint = str.indexOf('.');

	if (indexOfDecimalPoint < 0) {
		indexOfDecimalPoint = str.length;
		str = str + '.';
	}

	return str + replicateString('0', indexOfDecimalPoint + 1 + minNumberOfDecimalPlaces - str.length);
}

export function sum (arg) {

	// if (!isArrayOfNumbers(arg)) {
	if (!isArray(arg)) {
		return undefined;
	}

	// return arg.reduce(
	return arg.filter(isNumber).reduce(
		fnAddition,
		additiveIdentity
	);
}

export function product (arg) {

	// if (!isArrayOfNumbers(arg)) {
	if (!isArray(arg)) {
		return undefined;
	}

	// return arg.reduce(
	return arg.filter(isNumber).reduce(
		fnMultiplication,
		multiplicativeIdentity
	);
}

export function mean (arg) {

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	return sum(arg) / arg.length;
}

export function median (arg) {

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	const sortedArray = clone(arg).sort(); // Array.sort() sorts the array *in place*

	return sortedArray[Math.floor(sortedArray.length / 2)];
}

export function histogram (arg) {

	if (!isArray(arg)) {
		return undefined;
	}

	return arg.reduce(
		(accumulator, element) => {
			accumulator[element] = (accumulator[element] || 0) + 1;

			return accumulator;
		},
		{}
	);
}

// ThAW 2019-07-29 : ... or create a class ThAWHistogram with a constructor and a getItemCount(key) function.

/*
export class ThAWHistogram {
	constructor (arg, fnEqual) {

		if (!isArray(arg)) {
			throw new error('Error: ThAWHistogram constructor: arg is not an array.');
		}

		this.fnEqual = fnEqual || ((x, y) => x === y);

		this.arrayOfPairs = []; // Each pair consists of [item, count]

		// We could use arg.reduce() here:
		arg.forEach(element => {
			// he is short for 'histogram element'.
			const i = this.arrayOfPairs.findIndex(he => this.fnEqual(he[0], element));

			if (i < 0) {
				this.arrayOfPairs.push([element, 1]);
			} else {
				this.arrayOfPairs[i][1]++;
			}
		}
	}

	getItemCount (key) {
		const pair = this.arrayOfPairs.find(he => this.fnEqual(he[0], key));

		if (pair) {
			return pair[1];
		} else {
			return undefined;
		}
	}
}
 */

export function histogram_version2 (arg, fnEqual) {

	if (!isArray(arg)) {
		return undefined;
	}

	fnEqual = fnEqual || ((x, y) => x === y);

	const result = [];

	// We could use arg.reduce() here:
	arg.forEach(element => {
		const i = result.findIndex(he => fnEqual(he[0], element));

		if (i < 0) {
			result.push([element, 1]);
		} else {
			result[i][1]++;
		}

		/*
		// Or? :
		const he = result.find(he => fnEqual(he[0], element));

		if (he) {
			he[1]++;
		} else {
			result.push([element, 1]);
		}
		 */

		/*
		// Or? :
		const he = result.find(he => fnEqual(he[0], element)) || [element, 0];

		if (!he[1]++) { // Postfix increment; applies after the evaluation of !he[1]
			result.push(he);
		}
		 */
	});

	// result.sort((he1, he2) => he1[1] - he2[1]);

	return result;
}

export function histogramLookup (hist, key, fnEqual) {
	const pair = hist.find(he => fnEqual(he[0], key));

	if (pair) {
		return pair[1];
	} else {
		return undefined;
	}
}

export function mode (arg) {
	const hist = histogram(arg);

	return Object.keys(hist).reduce(
		(accumulator, element) => {

			if (hist[element] > accumulator.count) {
				accumulator = { element: element, count: hist[element] };
			}

			return accumulator;
		},
		{ element: undefined, count: 0 }
	);
}

export function standardDeviation (arg) {

	if (!isArrayOfNumbers(arg) || arg.length <= 1) {
		return undefined;
	}

	const meanOfArg = mean(arg);
	const square = n => n * n;

	return Math.sqrt(sum(arg.map(n => square(n - meanOfArg))) / (arg.length - 1));
}

export function aToThePowerOfB (a, b) {
	return product(createArrayFromElement(a, b));
}

export function tenToThePowerOfN (n) {
	return aToThePowerOfB(10, n);
}

export function factory_fnRoundToNDigits (n) {
	const val_tenToThePowerOfN = tenToThePowerOfN(n);

	return m => Math.round(m * val_tenToThePowerOfN) / val_tenToThePowerOfN;
}

export function isInteger (n) {
	return parseInt(n, 10) === n;
}

export function isNonNegativeInteger (n) {
	return isInteger(n) && n >= 0;
}

export function isPositiveInteger (n) {
	return isInteger(n) && n > 0;
}

export function isNonNegativeNumber (n) {
	return isNumber(n) && n >= 0;
}

export function isPositiveNumber (n) {
	return isNumber(n) && n > 0;
}

export function integerDivision (n1, n2) {
	return parseInt(n1 / n2, 10);

	// try {
	// 	return parseInt(n1 / n2, 10);
	// } catch (error) {
	// 	return undefined;
	// }
}

// Covariance: See https://www.investopedia.com/terms/c/covariance.asp

/*
When an analyst has a set of data, a pair of x and y values, covariance can be calculated using five variables from that data. They are:

    xi = a given x value in the data set
    xm = the mean, or average, of the x values
    yi = the y value in the data set that corresponds with xi
    ym = the mean, or average, of the y values
    n = the number of data points

Given this information, the formula for covariance is:

Covariance(x, y) = SUM [(xi - xm) * (yi - ym)] / (n - 1)
 */

export function covariance (x, y) {

	if (!isArrayOfNumbers(x) || !isArrayOfNumbers(y) || x.length !== y.length || x.length <= 1) {
		return undefined;
	}

	const mean_x = mean(x);
	const mean_y = mean(y);

	// Note that if x is a list of numbers, then covariance(x, x) === (standardDeviation(x)) ^ 2

	return sum(x.map((xi, i) => (xi - mean_x) * (y[i] - mean_y))) / (x.length - 1);
}

// Correlation Coefficient: See https://www.investopedia.com/terms/c/correlationcoefficient.asp

// CorrelationCoefficient(x, y) = ovariance(x, y) / (standardDeviation(x) * standardDeviation(y))

export function correlationCoefficient (x, y) {

	if (!isArrayOfNumbers(x) || !isArrayOfNumbers(y) || x.length !== y.length || x.length <= 1) {
		return undefined;
	}

	const numerator = covariance(x, y);
	const denominator = standardDeviation(x) * standardDeviation(y);

	// console.log('numerator is', numerator);
	// console.log('denominator is', denominator);

	if (denominator === 0) {
		return numerator ? Number.NaN : 0;
	}

	return numerator / denominator;
}
