/*
	// CommonJS, AMD, script tag
	if (typeof exports !== "undefined") {
		module.exports = getDateTimeString;
	} else if (typeof define === "function" && define.amd) {
		define(() => {
			return getDateTimeString;
		});
	} else {
		global.getDateTimeString = getDateTimeString;
	}
}(typeof window !== 'undefined' ? window : global));
*/

if (isDefined(window)) {
	window.clone = clone;
	window.copySpecifiedObjectProperties = copySpecifiedObjectProperties;
	window.generateFirstNNaturalNumbers = generateFirstNNaturalNumbers;
	window.generateRange = generateRange;
	window.getAllSubsets = getAllSubsets;
	window.getDateTimeString = getDateTimeString;
	window.getOwnProperties = getOwnProperties;
	window.getTypeString = getTypeString;
	window.histogram = histogram;
	window.insertNumberIntoArray = insertNumberIntoArray;
	window.insertionSort = insertionSort;
	window.isArray = isArray;
	window.isArrayOfNumbers = isArrayOfNumbers;
	window.isFunction = isFunction;
	window.isRegularExpression = isRegularExpression;
	window.isDefined = isDefined;
	window.mean = mean;
	window.median = median;
	window.mode = mode;
	window.removeDuplicatesFromArray = removeDuplicatesFromArray;
	window.replicateString = replicateString;
	window.safeJsonParse = safeJsonParse;
	window.sum = sum;
	window.zeroPadNumber = zeroPadNumber;
} else {
	global.clone = clone;
	global.copySpecifiedObjectProperties = copySpecifiedObjectProperties;
	global.generateFirstNNaturalNumbers = generateFirstNNaturalNumbers;
	global.generateRange = generateRange;
	global.getAllSubsets = getAllSubsets;
	global.getDateTimeString = getDateTimeString;
	global.getOwnProperties = getOwnProperties;
	global.getTypeString = getTypeString;
	global.histogram = histogram;
	global.insertNumberIntoArray = insertNumberIntoArray;
	global.insertionSort = insertionSort;
	global.isArray = isArray;
	global.isArrayOfNumbers = isArrayOfNumbers;
	global.isFunction = isFunction;
	global.isRegularExpression = isRegularExpression;
	global.isDefined = isDefined;
	global.mean = mean;
	global.median = median;
	global.mode = mode;
	global.removeDuplicatesFromArray = removeDuplicatesFromArray;
	global.replicateString = replicateString;
	global.safeJsonParse = safeJsonParse;
	global.sum = sum;
	global.zeroPadNumber = zeroPadNumber;
}
