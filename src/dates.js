// tom-weatherhead/common-utilities.js/src/dates.js

'use strict';

import {
	zeroPadNumber
} from './numbers.js';

import {
	getTypeString
} from './types.js';

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
