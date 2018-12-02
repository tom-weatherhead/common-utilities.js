// tom-weatherhead/common-utilities.js/src/types.js

'use strict';

export function getTypeString (obj) {
	return Object.prototype.toString.call(obj);
}

export function isDefined (obj) {
	return typeof obj !== 'undefined';
	// return getTypeString(obj) === 'undefined'; // ?
}

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

/*
export function isArray (obj) {
	return getTypeString(obj) === '[object ?]';
}

export function isDate (obj) {
}

export function isNumber (obj) {
}

export function isObject (obj) {
}

export function isString (obj) {
}
*/

export const isFunction = factory_fnIsType('Function');

export const isRegularExpression = factory_fnIsType('RegExp');

export function isArrayOfNumbers (arg) {
	return isArray(arg) &&
		arg.every(element => getTypeString(element) === '[object Number]');
}
