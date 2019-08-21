// tom-weatherhead/common-utilities.js/src/types.js

'use strict';

import {
	booleanInvertFunction,
	compositeFunctions
} from './functions.js';

export function getTypeString (obj) {
	return Object.prototype.toString.call(obj);
}

export function areTypesEqual (obj1, obj2) {
	return getTypeString(obj1) === getTypeString(obj2);
}

function factory_fnIsType (typeName) {
	return arg => getTypeString(arg) === `[object ${typeName}]`;
}

// Done: npm i -D @babel/preset-env
// Done: Babel presets in Gruntfile: "presets": [ "@babel/preset-env" ]
// See https://github.com/babel/babel/issues/8575
// See https://github.com/storybooks/storybook/issues/3937
// See https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null

// export function isDefined (obj) {
// 	return typeof obj !== '[object Undefined]';
// }

export const isUndefined = factory_fnIsType('Undefined');
// I.e. isDefined(arg) === booleanInvertFunction(isUndefined(arg))
export const isDefined = compositeFunctions([isUndefined, booleanInvertFunction]);

export const isArray = factory_fnIsType('Array');

export const isBoolean = factory_fnIsType('Boolean');

export const isDate = factory_fnIsType('Date');

export const isFunction = factory_fnIsType('Function');

const isNumberType = factory_fnIsType('Number');
// export const isNumber = arg => isNumberType(arg) && arg === arg; // This works too, since NaN !== NaN.
export const isNumber = arg => isNumberType(arg) && !Number.isNaN(arg);

export const isObject = factory_fnIsType('Object');

export const isRegularExpression = factory_fnIsType('RegExp');

export const isString = factory_fnIsType('String');

export const isArrayOf = (arg, fn) => isArray(arg) && arg.every(fn);

// export const isArrayOfNumbers = arg => isArray(arg) && arg.every(isNumber);
export const isArrayOfNumbers = arg => isArrayOf(arg, isNumber);

export const isAggregateEntity = arg => isArray(arg) || isObject(arg);

export const ifDefinedElse = (arg, dflt) => isDefined(arg) ? arg : dflt;
