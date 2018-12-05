// tom-weatherhead/common-utilities.js/src/types.js

'use strict';

export function getTypeString (obj) {
	return Object.prototype.toString.call(obj);
}

function factory_fnIsType (typeName) {
	return arg => getTypeString(arg) === `[object ${typeName}]`;
}

// TODO: npm i -D @babel/preset-env
// TODO: Babel presets in Gruntfile: "presets": [ "@babel/preset-env" ]
// See https://github.com/babel/babel/issues/8575
// See https://github.com/storybooks/storybook/issues/3937
// See https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null

export function isDefined (obj) {
	return typeof obj !== 'undefined';
	// return getTypeString(obj) === 'undefined'; // ?
}

export const isArray = factory_fnIsType('Array');

export const isDate = factory_fnIsType('Date');

export const isFunction = factory_fnIsType('Function');

export const isNumber = factory_fnIsType('Number');

export const isObject = factory_fnIsType('Object');

export const isRegularExpression = factory_fnIsType('RegExp');

export const isString = factory_fnIsType('String');

export function isArrayOfNumbers (arg) {
	return isArray(arg) &&
		arg.every(element => isNumber(element));
}
