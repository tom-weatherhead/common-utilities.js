// tom-weatherhead/common-utilities.js/src/dates.js

'use strict';

import {
	zeroPadNumber
} from './numbers.js';

import {
	// getTypeString
	isDate
} from './types.js';

export function getDateTimeString (date) {
	// const typeStringOfParam = getTypeString(date);

	// console.log('getDateTimeString() : Type of date parameter is', typeStringOfParam);

	// if (!date || typeStringOfParam !== '[object Date]') {
	if (!date || !isDate(date)) {
		// console.log('getDateTimeString() : Setting the parameter to the current date and time...');
		date = new Date();
	}

	// See https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
	// ('000' + num).slice(-4)

	// return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;

	return `${date.getFullYear()}-${zeroPadNumber(date.getMonth() + 1, 2)}-${zeroPadNumber(date.getDate(), 2)} ${zeroPadNumber(date.getHours(), 2)}:${zeroPadNumber(date.getMinutes(), 2)}:${zeroPadNumber(date.getSeconds(), 2)}`;

	/*
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString .
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat .

	// ! The fails under Node.js ; see https://github.com/nodejs/node/issues/8500
	// mscdex: "By default --with-intl=small-icu is used to build node, which contains just the en-US locale
	// (@nodejs/intl -- is this correct or does it contain more?). You will need to either build node
	// with --with-intl=full-icu or --with-intl=system-icu if you want to be able to use more locales.
	// The reason node is built with a smaller ICU by default is file size.

	return date
		.toLocaleTimeString(
			'en-CA',
			{
				timeZone: 'UTC',
				hour12: false,
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			}
		)
		.replace(',', '');
	*/
}

export function getDateTimeUTCString (date) {

	if (!date || !isDate(date)) {
		// console.log('getDateTimeString() : Setting the parameter to the current date and time...');
		date = new Date();
	}

	return `${date.getUTCFullYear()}-${zeroPadNumber(date.getUTCMonth() + 1, 2)}-${zeroPadNumber(date.getUTCDate(), 2)} ${zeroPadNumber(date.getUTCHours(), 2)}:${zeroPadNumber(date.getUTCMinutes(), 2)}:${zeroPadNumber(date.getUTCSeconds(), 2)}`;
}

export function getDifferenceBetweenDatesAsObject (dateEarlier, dateLater) {
	const dateValueDifference = dateLater.valueOf() - dateEarlier.valueOf();
	let seconds = Math.floor(dateValueDifference / 1000);
	const hours = Math.floor(seconds / 3600);

	seconds -= hours * 3600;

	const minutes = Math.floor(seconds / 60);

	seconds -= minutes * 60;

	return {
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};
}

export function getDifferenceBetweenDatesAsString (dateEarlier, dateLater) {
	const diff = getDifferenceBetweenDatesAsObject(dateEarlier, dateLater);

	return `${zeroPadNumber(diff.hours, 2)}h ${zeroPadNumber(diff.minutes, 2)}m ${zeroPadNumber(diff.seconds, 2)}s`;
}
