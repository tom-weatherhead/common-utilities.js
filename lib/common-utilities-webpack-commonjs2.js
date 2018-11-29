module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: getTypeString, clone, isDefined, copySpecifiedObjectProperties, getOwnProperties, generateRange, generateFirstNNaturalNumbers, replicateString, zeroPadNumber, getDateTimeString, insertNumberIntoArray, insertionSort, removeDuplicatesFromArray, safeJsonParse, uuid, isArray, isFunction, isRegularExpression, isArrayOfNumbers, sum, mean, median, histogram, mode, getAllSubsets, areSetsEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeString", function() { return getTypeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copySpecifiedObjectProperties", function() { return copySpecifiedObjectProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnProperties", function() { return getOwnProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRange", function() { return generateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFirstNNaturalNumbers", function() { return generateFirstNNaturalNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicateString", function() { return replicateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPadNumber", function() { return zeroPadNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateTimeString", function() { return getDateTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNumberIntoArray", function() { return insertNumberIntoArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertionSort", function() { return insertionSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicatesFromArray", function() { return removeDuplicatesFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJsonParse", function() { return safeJsonParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegularExpression", function() { return isRegularExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNumbers", function() { return isArrayOfNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return mean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return median; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return histogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mode", function() { return mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubsets", function() { return getAllSubsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areSetsEqual", function() { return areSetsEqual; });
// @tom-weatherhead/common-utilities.js/src/main.js
 // **** Type Utilities ****

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getTypeString(obj) {
  return Object.prototype.toString.call(obj);
} // **** Object utilities ****

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

function clone(arg) {
  // For an in-depth discussion of object copying, see https://scotch.io/bar-talk/copying-objects-in-javascript
  // **** Warning: JSON.parse(JSON.stringify(arg)) will fail for circular objects.
  // ? Do we need isCircular(obj) ?
  return JSON.parse(JSON.stringify(arg)); // From avoidwork/haro/src/utility.js :
  // return JSON.parse(JSON.stringify(arg, null, 0)); // TODO: What are the second and third parameters to stringify() ?
}
function isDefined(obj) {
  return typeof obj !== 'undefined';
}
function copySpecifiedObjectProperties(propertyList, src) {
  var dst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  propertyList.forEach(function (property) {
    // if (typeof src[property] !== 'undefined') {
    if (isDefined(src[property])) {
      dst[property] = src[property];
    }
  });
  return dst;
}
function getOwnProperties() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
} // **** Numeric utilities ****

function generateRange(start, end) {
  var result = [];

  while (start <= end) {
    result.push(start);
    start++;
  }

  return result;
}
function generateFirstNNaturalNumbers(n) {
  return generateRange(1, n);
}
function replicateString(str, n) {
  return generateFirstNNaturalNumbers(n).reduce( // (accumulator, i) => accumulator + str,
  function (accumulator) {
    return accumulator + str;
  }, '');
}
function zeroPadNumber(n, minLength) {
  return (replicateString('0', minLength) + n).slice(-minLength);
} // **** Date Utilities ****

function getDateTimeString(date) {
  var typeStringOfParam = getTypeString(date); // console.log('getDateTimeString() : Type of date parameter is', typeStringOfParam);

  if (!date || typeStringOfParam !== '[object Date]') {
    // console.log('getDateTimeString() : Setting the parameter to the current date and time...');
    date = new Date();
  } // See https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
  // ('000' + num).slice(-4)
  // return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;


  return "".concat(date.getFullYear(), "-").concat(zeroPadNumber(date.getMonth() + 1, 2), "-").concat(zeroPadNumber(date.getDate(), 2), " ").concat(zeroPadNumber(date.getHours(), 2), ":").concat(zeroPadNumber(date.getMinutes(), 2), ":").concat(zeroPadNumber(date.getSeconds(), 2));
} // **** Array Utilities ****

function insertNumberIntoArray(n, array) {
  // array must already be sorted in non-descending order.
  var i = array.findIndex(function (m) {
    return m >= n;
  });

  if (i < 0) {
    i = array.length;
  }

  var result = clone(array); // Array.splice modifies the array in place. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

  result.splice(i, 0, n);
  return result;
}
function insertionSort(array) {
  return array.reduce(function (accumulator, n) {
    return insertNumberIntoArray(n, accumulator);
  }, []);
}
function removeDuplicatesFromArray(array) {
  // See the discussion at https://gist.github.com/telekosmos/3b62a31a5c43f40849bb
  // JavaScript Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // See https://stackoverflow.com/questions/13486479/how-to-get-an-array-of-unique-values-from-an-array-containing-duplicates-in-java
  // Discussion about performace: See https://medium.com/@jakubsynowiec/unique-array-values-in-javascript-7c932682766c
  // return [...new Set(array)]; // Yes. Requires ES6, since it uses the "spread" operator ("...").
  // return Array.from(new Set(array)); // Yes
  // array.includes() does not exist.
  return array.reduce(function (x, y) {
    return x.includes(y) ? x : _toConsumableArray(x).concat([y]);
  }, []); // Yes. From svnpenn.
}
function safeJsonParse(str) {
  var dflt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  try {
    return JSON.parse(str);
  } catch (e) {
    if (!isDefined(dflt)) {
      throw e;
    }

    return dflt;
  }
} // avoidwork/haro/src/utility.js

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

function uuid() {
  // From avoidwork/haro. Thank you, Jason Mulligan.
  var r = [8, 9, 'a', 'b'];

  var s = function s() {
    return ((Math.random() + 1) * 0x10000 | 0).toString(16).substring(1);
  };

  return s() + s() + '-' + s() + '-4' + s().substr(0, 3) + '-' + r[Math.floor(Math.random() * 4)] + s().substr(0, 3) + '-' + s() + s() + s();
} // **** END : From avoidwork/haro ****
// TODO: common-utilities: Create mean(), median(), mode(), histogram()

/*
export function isArray (arg) {
	return getTypeString(arg) === '[object Array]';
}
*/

function factory_fnIsType(typeName) {
  return function (arg) {
    return getTypeString(arg) === "[object ".concat(typeName, "]");
  };
} // TODO: npm i -D @babel/preset-env
// TODO: Babel presets in Gruntfile: "presets": [ "@babel/preset-env" ]
// See https://github.com/babel/babel/issues/8575
// See https://github.com/storybooks/storybook/issues/3937
// See https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null


var isArray = factory_fnIsType('Array');
/*
export function isFunction (arg) {
	return getTypeString(arg) === '[object Function]';
}
*/

var isFunction = factory_fnIsType('Function');
var isRegularExpression = factory_fnIsType('RegExp');
function isArrayOfNumbers(arg) {
  return isArray(arg) && arg.every(function (element) {
    return getTypeString(element) === '[object Number]';
  });
}
function sum(arg) {
  if (!isArrayOfNumbers(arg)) {
    return undefined;
  }

  return arg.reduce(function (accumulator, n) {
    return accumulator + n;
  }, 0);
}
function mean(arg) {
  if (!isArrayOfNumbers(arg) || arg.length <= 0) {
    return undefined;
  }

  return sum(arg) / arg.length;
}
function median(arg) {
  // console.log('median: arg is', arg);
  // console.log('median: getTypeString(arg) is', getTypeString(arg));
  if (!isArrayOfNumbers(arg) || arg.length <= 0) {
    return undefined;
  }

  var sortedArray = clone(arg).sort(); // Array.sort() sorts the array *in place*
  // console.log('median: sortedArray is', sortedArray);
  // console.log('median: sortedArray.length is', sortedArray.length);

  return sortedArray[Math.floor(sortedArray.length / 2)];
}
function histogram(arg) {
  if (!isArray(arg)) {
    return undefined;
  }

  var result = {};
  arg.forEach(function (element) {
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
function mode(arg) {
  var hist = histogram(arg);
  return Object.keys(hist).reduce(function (accumulator, element) {
    // console.log('mode: accumulator is', accumulator);
    // console.log('mode: element is', element);
    // console.log('mode: hist[element] is', hist[element]);
    if (hist[element] > accumulator.count) {
      accumulator = {
        element: element,
        count: hist[element]
      }; // console.log('**** mode: accumulator is now', accumulator);
    }

    return accumulator;
  }, {
    element: undefined,
    count: 0
  });
}

function getAllSubsetsHelper(result, arg, i, subsetInProgress) {
  if (i >= arg.length) {
    result.push(clone(subsetInProgress));
  } else {
    getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
    subsetInProgress.push(arg[i]);
    getAllSubsetsHelper(result, arg, i + 1, subsetInProgress);
    subsetInProgress.pop();
  }
}

function getAllSubsets(arg, sortSubsets, fnSubsetComparator) {
  var result = [];
  getAllSubsetsHelper(result, arg, 0, []); // console.log('getAllSubsets() : arg is', arg, '; result is', result);

  if (sortSubsets) {
    var fnDefaultSubsetComparator = function fnDefaultSubsetComparator(s1, s2) {
      var lengthDiff = s1.length - s2.length;

      if (lengthDiff) {
        return lengthDiff;
      }

      for (var i = 0; i < s1.length; ++i) {
        var elementDiff = s1[i] - s2[i];

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

function isSubset(set1, set2, fnElementsAreEqual) {
  return set1.every(function (element1) {
    return isDefined(set2.find(function (element2) {
      return fnElementsAreEqual(element1, element2);
    }));
  });
}

function areSetsEqual(set1, set2, fnElementsAreEqual) {
  if (!isFunction(fnElementsAreEqual)) {
    fnElementsAreEqual = function fnElementsAreEqual(a, b) {
      return a === b;
    };
  }

  return isArray(set1) && isArray(set2) && isSubset(set1, set2, fnElementsAreEqual) && isSubset(set2, set1, fnElementsAreEqual);
} // return () => 'Hello world!';

/***/ })

/******/ });
//# sourceMappingURL=common-utilities-webpack-commonjs2.js.map