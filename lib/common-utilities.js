/**
 * thaw-common-utilities.js
 *
 * @copyright 2018 Tom Weatherhead <null@2hrd4u.org> (https://httpbin.org/status/418)
 * @license MIT
 * @version 0.0.1
 */
// @tom-weatherhead/common-utilities.js/src/main.js
'use strict'; // **** Type Utilities ****

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeString = getTypeString;
exports.clone = clone;
exports.isDefined = isDefined;
exports.copySpecifiedObjectProperties = copySpecifiedObjectProperties;
exports.getOwnProperties = getOwnProperties;
exports.generateRange = generateRange;
exports.generateFirstNNaturalNumbers = generateFirstNNaturalNumbers;
exports.replicateString = replicateString;
exports.zeroPadNumber = zeroPadNumber;
exports.getDateTimeString = getDateTimeString;
exports.insertNumberIntoArray = insertNumberIntoArray;
exports.insertionSort = insertionSort;
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;

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
  return JSON.parse(JSON.stringify(arg));
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


  return date.getFullYear() + "-" + zeroPadNumber(date.getMonth() + 1, 2) + "-" + zeroPadNumber(date.getDate(), 2) + " " + zeroPadNumber(date.getHours(), 2) + ":" + zeroPadNumber(date.getMinutes(), 2) + ":" + zeroPadNumber(date.getSeconds(), 2);
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
    return x.includes(y) ? x : [].concat(_toConsumableArray(x), [y]);
  }, []); // Yes. From svnpenn.
}
