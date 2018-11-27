/**
 * thaw-common-utilities.js
 *
 * @copyright 2018 Tom Weatherhead <null@2hrd4u.org> (https://httpbin.org/status/418)
 * @license MIT
 * @version 0.0.3
 */
// @tom-weatherhead/common-utilities.js/src/main.js

'use strict';

// **** Type Utilities ****

export function getTypeString (obj) {
	return Object.prototype.toString.call(obj);
}

// **** Object utilities ****

/*
// From A. Levy's answer at https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object

When I had to implement general deep copying I ended up compromising by assuming that I would only need to copy
a plain Object, Array, Date, String, Number, or Boolean. The last 3 types are immutable, so I could perform a shallow copy
and not worry about it changing. I further assumed that any elements contained in Object or Array would also be one of the 6 simple types
in that list. This can be accomplished with code like the following:

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

The above function will work adequately for the 6 simple types I mentioned, as long as the data in the objects and arrays form a tree structure.
That is, there isn't more than one reference to the same data in the object.
*/

export function clone (arg) {
	// For an in-depth discussion of object copying, see https://scotch.io/bar-talk/copying-objects-in-javascript

	// **** Warning: JSON.parse(JSON.stringify(arg)) will fail for circular objects.
	// ? Do we need isCircular(obj) ?
	return JSON.parse(JSON.stringify(arg));

	// From avoidwork/haro/src/utility.js :
	// return JSON.parse(JSON.stringify(arg, null, 0)); // TODO: What are the second and third parameters to stringify() ?
}

export function isDefined (obj) {
	return typeof obj !== 'undefined';
}

export function copySpecifiedObjectProperties (propertyList, src, dst = {}) {

	propertyList.forEach(property => {

		// if (typeof src[property] !== 'undefined') {
		if (isDefined(src[property])) {
			dst[property] = src[property];
		}
	});

	return dst;
}

export function getOwnProperties (obj = {}) {
	/*
	// Version 1
	// See https://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object
	let result = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			result.push(key);
		}
	}

	return result;
	*/

	// Version 2
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
	return Object.getOwnPropertyNames(obj);
}

// **** Numeric utilities ****

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

// **** Date Utilities ****

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

// **** Array Utilities ****

export function insertNumberIntoArray (n, array) {
	// array must already be sorted in non-descending order.
	let i = array.findIndex(m => m >= n);

	if (i < 0) {
		i = array.length;
	}

	let result = clone(array);

	// Array.splice modifies the array in place. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
	result.splice(i, 0, n);

	return result;
}

export function insertionSort (array) {
	return array.reduce(
		(accumulator, n) => insertNumberIntoArray(n, accumulator),
		[]
	);
}

export function removeDuplicatesFromArray (array) {
	// See the discussion at https://gist.github.com/telekosmos/3b62a31a5c43f40849bb

	// JavaScript Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

	// See https://stackoverflow.com/questions/13486479/how-to-get-an-array-of-unique-values-from-an-array-containing-duplicates-in-java
	// Discussion about performace: See https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c
	// return [...new Set(array)]; // Yes. Requires ES6, since it uses the "spread" operator ("...").

	// return Array.from(new Set(array)); // Yes

	// array.includes() does not exist.

	return array.reduce((x, y) => x.includes(y) ? x : [...x, y], []); // Yes. From svnpenn.
}

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

// avoidwork/haro/src/utility.js
/*
	function has (a, b) {
		return b in a;
	}

	function each (arr, fn) {
		for (const item of arr.entries()) {
			fn(item[1], item[0]);
		}

		return arr;
	}

	function cast (input) {
		let result;

		switch (true) {
			case input instanceof Map:
				result = {};
				input.forEach((value, key) => {
					result[key] = cast(value);
				});
				break;
			case input instanceof Set:
				result = Array.from(input);
				break;
			case Array.isArray(input):
				result = new Set(input);
				break;
			case input instanceof Object:
				result = new Map(Object.keys(input).map(i => [i, cast(input[i])]));
				break;
			default:
				result = input;
		}

		return result;
	}

	function blob (arg) {
		return new Blob([arg], {type: "application/javascript"});
	}

	function clone (arg) {
		return JSON.parse(JSON.stringify(arg, null, 0));
	}

	function concatURI (left, right) {
		return left.replace(regex.querystring, "").replace(regex.endslash, "") + (right ? "/" + right : "");
	}

	function keyIndex (key, data, delimiter, pattern) {
		let result;

		if (key.indexOf(delimiter) > -1) {
			result = key.split(delimiter).sort((a, b) => a.localeCompare(b)).map(i => data[i].toString().replace(new RegExp(pattern, "g"), "").toLowerCase()).join(delimiter);
		} else {
			result = data[key];
		}

		return result;
	}

	function delIndex (index, indexes, delimiter, key, data, pattern) {
		index.forEach(i => {
			const idx = indexes.get(i),
				value = keyIndex(i, data, delimiter, pattern);

			if (idx.has(value)) {
				const o = idx.get(value);

				o.delete(key);

				if (o.size === 0) {
					idx.delete(value);
				}
			}
		});
	}

	function createIndexes (records, indexes, key, delimiter, pattern) {
		const result = {};

		each(indexes, i => {
			result[i] = {};
		});

		each(records, i => {
			const lkey = i[key];

			if (lkey !== void 0) {
				indexes.forEach(index => {
					const lindex = keyIndex(index, i, delimiter, pattern);

					if (!has(result[index], lindex)) {
						result[index][lindex] = [];
					}

					result[index][lindex].push(lkey);
				});
			}
		});

		return result;
	}

	function iterate (obj, fn) {
		if (obj instanceof Object) {
			each(Object.keys(obj), i => fn.call(obj, obj[i], i));
		} else {
			each(obj, fn);
		}
	}

	function merge (a, b) {
		if (a instanceof Object && b instanceof Object) {
			each(Object.keys(b), i => {
				if (a[i] instanceof Object && b[i] instanceof Object) {
					a[i] = merge(a[i], b[i]);
				} else if (Array.isArray(a[i]) && Array.isArray(b[i])) {
					a[i] = a[i].concat(b[i]);
				} else {
					a[i] = b[i];
				}
			});
		} else if (Array.isArray(a) && Array.isArray(b)) {
			a = a.concat(b);
		} else {
			a = b;
		}

		return a;
	}

	function joinData (id, a, b, key, on, type = "inner") {
		const result = [];
		let errorMsg = "More than one record found on ";

		let error = false;

		function join (left, right, ids, include = false, reverse = false) {
			const keys = Object.keys(right[0]),
				fn = !reverse ? (x, i) => x[on] === i[key] : (x, i) => x[key] === i[on];

			each(left, i => {
				const comp = {},
					c = right.filter(x => fn(x, i));

				let valid = true;

				if (c.length > 1) {
					error = true;
					errorMsg += i[on];
					valid = false;
				} else if (c.length === 1) {
					each([i, c[0]], (x, idx) => iterate(x, (v, k) => {
						comp[ids[idx] + "_" + k] = v;
					}));
				} else if (include) {
					iterate(i, (v, k) => {
						comp[ids[0] + "_" + k] = v;
					});

					each(keys, k => {
						comp[ids[1] + "_" + k] = null;
					});
				}

				if (valid && Object.keys(comp).length > 0) {
					result.push(comp);
				}

				return valid;
			}, true);
		}

		if (type === "inner") {
			join(a, b, id);
		}

		if (type === "left") {
			join(a, b, id, true);
		}

		if (type === "right") {
			join(b, a, clone(id).reverse(), true, true);
		}

		return !error ? result : errorMsg;
	}

	function onmessage (ev) {
		const data = JSON.parse(ev.data),
			cmd = data.cmd;

		let result;

		if (cmd === "index") {
			result = createIndexes(data.records, data.index, data.key, data.delimiter, data.pattern);
		}

		if (cmd === "join") {
			result = joinData(data.ids, data.records[0], data.records[1], data.key, data.on, data.type);
		}

		postMessage(JSON.stringify(result));
	}

	function createPatch (ogdata = {}, data = {}, key = "", overwrite = false) {
		const result = [];

		if (overwrite) {
			iterate(ogdata, (v, k) => {
				if (k !== key && data[k] === void 0) {
					result.push({op: "remove", path: "/" + k});
				}
			});
		}

		iterate(data, (v, k) => {
			if (k !== key && ogdata[k] === void 0) {
				result.push({op: "add", path: "/" + k, value: v});
			} else if (JSON.stringify(ogdata[k]) !== JSON.stringify(v)) {
				result.push({op: "replace", path: "/" + k, value: v});
			}
		});

		return result;
	}

	function s () {
		return ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);
	}

	function setIndex (index, indexes, delimiter, key, data, indice, pattern) {
		each(!indice ? index : [indice], i => {
			const lidx = keyIndex(i, data, delimiter, pattern);
			let lindex;

			if (lidx !== void 0 && lidx !== null) {
				lindex = indexes.get(i);

				if (!lindex.has(lidx)) {
					lindex.set(lidx, new Set());
				}

				lindex.get(lidx).add(key);
			}
		});
	}

	function toObjekt (arg, frozen = true) {
		const result = {};

		arg.forEach((value, key) => {
			const obj = value;

			if (frozen) {
				Object.freeze(obj);
			}

			result[clone(key)] = obj;
		});

		if (frozen) {
			Object.freeze(result);
		}

		return result;
	}

	function uuid () {
		return s() + s() + "-" + s() + "-4" + s().substr(0, 3) + "-" + r[Math.floor(Math.random() * 4)] + s().substr(0, 3) + "-" + s() + s() + s();
	}

	const functions = [
		cast.toString(),
		clone.toString(),
		createIndexes.toString(),
		each.toString(),
		has.toString(),
		iterate.toString(),
		joinData.toString(),
		keyIndex.toString(),
		setIndex.toString(),
		(node === false ? "" : "self.") + "onmessage = " + onmessage.toString() + ";"
	].join("\n");
*/

// uuid() :
// See https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// See https://developer.mozilla.org/en-US/docs/Web/API/Crypto

// **** BEGIN : From avoidwork/haro ****

/*
function s () {
	return ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);
}
*/

export function uuid () {
	// From avoidwork/haro. Thank you, Jason Mulligan.
	const r = [8, 9, 'a', 'b'];
	const s = () => ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);

	return s() + s() + '-' + s() + '-4' + s().substr(0, 3) + '-' +
		r[Math.floor(Math.random() * 4)] + s().substr(0, 3) + '-' +
		s() + s() + s();
}

// **** END : From avoidwork/haro ****

// TODO: common-utilities: Create mean(), median(), mode(), histogram()

/*
export function isArray (arg) {
	return getTypeString(arg) === '[object Array]';
}
*/

function factory_fnIsType (typeName) {
	return arg => getTypeString(arg) === `[object ${typeName}]`;
}

// TODO: npm i -D @babel/preset-env
// TODO: Babel presets in Gruntfile: "presets": [ "@babel/preset-env" ]
// See https://github.com/babel/babel/issues/8575
// See https://github.com/storybooks/storybook/issues/3937
// See https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null
export const isArray = factory_fnIsType('Array');

/*
export function isFunction (arg) {
	return getTypeString(arg) === '[object Function]';
}
*/
export const isFunction = factory_fnIsType('Function');

export const isRegularExpression = factory_fnIsType('RegExp');

export function isArrayOfNumbers (arg) {
	return isArray(arg) &&
		arg.every(element => getTypeString(element) === '[object Number]');
}

export function sum (arg) {

	if (!isArrayOfNumbers(arg)) {
		return undefined;
	}

	return arg.reduce(
		(accumulator, n) => accumulator + n,
		0
	);
}

export function mean (arg) {

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	return sum(arg) / arg.length;
}

export function median (arg) {
	// console.log('median: arg is', arg);
	// console.log('median: getTypeString(arg) is', getTypeString(arg));

	if (!isArrayOfNumbers(arg) || arg.length <= 0) {
		return undefined;
	}

	const sortedArray = clone(arg).sort(); // Array.sort() sorts the array *in place*

	// console.log('median: sortedArray is', sortedArray);
	// console.log('median: sortedArray.length is', sortedArray.length);

	return sortedArray[Math.floor(sortedArray.length / 2)];
}

export function histogram (arg) {

	if (!isArray(arg)) {
		return undefined;
	}

	let result = {};

	arg.forEach(element => {
		result[element] = (result[element] || 0) + 1;
	});

	return result;

	/* Or:
	return arg.reduce(
		(accumulator, element) => {
			accumulator[element] = (accumulator[element] || 0) + 1;

			return accumulator;
		},
		{}
	);
	*/
}

export function mode (arg) {
	const hist = histogram(arg);

	return Object.keys(hist).reduce(
		(accumulator, element) => {
			// console.log('mode: accumulator is', accumulator);
			// console.log('mode: element is', element);
			// console.log('mode: hist[element] is', hist[element]);

			if (hist[element] > accumulator.count) {
				accumulator = { element: element, count: hist[element] };
				// console.log('**** mode: accumulator is now', accumulator);
			}

			return accumulator;
		},
		{ element: undefined, count: 0 }
	);
}

function getAllSubsetsHelper (result, arg, i, subsetInProgress) {

	if (i >= arg.length) {
		result.push(clone(subsetInProgress));
	} else {
		getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
		subsetInProgress.push(arg[i]);
		getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
		subsetInProgress.pop();
	}
}

export function getAllSubsets (arg, sortSubsets, fnSubsetComparator) {
	let result = [];

	getAllSubsetsHelper(result, arg, 0, []);

	// console.log('getAllSubsets() : arg is', arg, '; result is', result);

	if (sortSubsets) {
		const fnDefaultSubsetComparator = (s1, s2) => {
			const lengthDiff = s1.length - s2.length;

			if (lengthDiff) {
				return lengthDiff;
			}

			for (let i = 0; i < s1.length; ++i) {
				const elementDiff = s1[i] - s2[i];

				if (elementDiff) {
					return elementDiff;
				}
			}

			return 0;
		};

		result.sort(fnSubsetComparator || fnDefaultSubsetComparator);
	}

	return result;
}

function isSubset (set1, set2, fnElementsAreEqual) {
	return set1.every(element1 => isDefined(set2.find(element2 => fnElementsAreEqual(element1, element2))));
}

export function areSetsEqual (set1, set2, fnElementsAreEqual) {

	if (!isFunction(fnElementsAreEqual)) {
		fnElementsAreEqual = (a, b) => a === b;
	}

	return isArray(set1) && isArray(set2) && isSubset(set1, set2, fnElementsAreEqual) && isSubset(set2, set1, fnElementsAreEqual);
}
