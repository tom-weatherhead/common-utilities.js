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

const target = window || global;

target.clone = clone;
target.copySpecifiedObjectProperties = copySpecifiedObjectProperties;
target.generateFirstNNaturalNumbers = generateFirstNNaturalNumbers;
target.generateRange = generateRange;
target.getAllSubsets = getAllSubsets;
target.getDateTimeString = getDateTimeString;
target.getOwnProperties = getOwnProperties;
target.getTypeString = getTypeString;
target.histogram = histogram;
target.insertNumberIntoArray = insertNumberIntoArray;
target.insertionSort = insertionSort;
target.isArray = isArray;
target.isArrayOfNumbers = isArrayOfNumbers;
target.isFunction = isFunction;
target.isRegularExpression = isRegularExpression;
target.isDefined = isDefined;
target.mean = mean;
target.median = median;
target.mode = mode;
target.removeDuplicatesFromArray = removeDuplicatesFromArray;
target.replicateString = replicateString;
target.safeJsonParse = safeJsonParse;
target.sum = sum;
target.zeroPadNumber = zeroPadNumber;
