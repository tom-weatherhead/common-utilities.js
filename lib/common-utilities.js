/**
 * @tom-weatherhead/common-utilities.js
 *
 * @copyright 2018 Tom Weatherhead <null@2hrd4u.org> (https://httpbin.org/status/418)
 * @license MIT
 * @version 0.0.0
 */
// @tom-weatherhead/common-utilities.js/src/main.js
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeString = getTypeString;
exports.generateRange = generateRange;
exports.generateFirstNNaturalNumbers = generateFirstNNaturalNumbers;
exports.replicateString = replicateString;
exports.zeroPadNumber = zeroPadNumber;
exports.getDateTimeString = getDateTimeString;

function getTypeString(obj) {
  return Object.prototype.toString.call(obj);
}

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
}

function getDateTimeString(date) {
  var typeStringOfParam = getTypeString(date); // console.log('getDateTimeString() : Type of date parameter is', typeStringOfParam);

  if (!date || typeStringOfParam !== '[object Date]') {
    console.log('getDateTimeString() : Setting the parameter to the current date and time...');
    date = new Date();
  } // See https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
  // ('000' + num).slice(-4)
  // return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;


  return date.getFullYear() + "-" + zeroPadNumber(date.getMonth() + 1, 2) + "-" + zeroPadNumber(date.getDate(), 2) + " " + zeroPadNumber(date.getHours(), 2) + ":" + zeroPadNumber(date.getMinutes(), 2) + ":" + zeroPadNumber(date.getSeconds(), 2);
}
