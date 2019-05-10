// tom-weatherhead/common-utilities.js/src/strings.js

'use strict';

import {
	isNumber
} from './types.js';

export function replicateString (str, n) {

	if (!isNumber(n)) {
		return undefined;
	}

	let result = '';

	while (n > 0) {
		result = result + `${str}`;
		--n;
	}

	return result;
}
