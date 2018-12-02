// tom-weatherhead/common-utilities.js/src/json.js

'use strict';

import {
	isDefined
} from './types.js';

export function safeJsonParse (str, dflt = undefined) {
	try {
		return JSON.parse(str);
	} catch (e) {

		if (!isDefined(dflt)) {
			throw e;
		}

		return dflt;
	}
}
