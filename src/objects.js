// tom-weatherhead/common-utilities.js/src/objects.js

'use strict';

import {
	areTypesEqual,
	isAggregateEntity,
	isDefined,
	isNumber,
	isObject
} from './types.js';

export function clone (arg) {
	// For an in-depth discussion of object copying, see https://scotch.io/bar-talk/copying-objects-in-javascript

	// **** Warning: JSON.parse(JSON.stringify(arg)) will fail for circular objects.
	// ? Do we need isCircular(obj) ?
	return JSON.parse(JSON.stringify(arg));

	// From avoidwork/haro/src/utility.js :
	// return JSON.parse(JSON.stringify(arg, null, 0)); // TODO: What are the second and third parameters to stringify() ?
}

export function copySpecifiedObjectProperties (propertyList, src, dst = {}) {

	// propertyList.forEach(property => {

	// 	if (isDefined(src[property])) {
	// 		dst[property] = src[property];
	// 	}
	// });

	propertyList
		.filter(property => isDefined(src[property]))
		.forEach(property => {
			dst[property] = src[property];
		});

	return dst;
}

export function combineObjects (...objects) {
	let combinedObject = {};

	objects.forEach(object => {

		Object.keys(object).forEach(key => {
			combinedObject[key] = object[key];
		});
	});

	return combinedObject;
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

// E.g. getProperty(obj, 'subObj1.subObj2.arrayMember.length', 'Toast');

export function getProperty (obj, propertyPath, defaultValue) {
	const arrayOfProperties = propertyPath.split('.');

	for (let i = 0; i < arrayOfProperties.length; ++i) {

		if (!isDefined(obj)) {
			return defaultValue;
		}

		obj = obj[arrayOfProperties[i]];
	}

	return obj;
}

export function deleteUndefinedValuesFromObject (obj) {
	const keysToDelete = Object.keys(obj).filter(key => typeof obj[key] === 'undefined');

	keysToDelete.forEach(key => {
		delete obj[key];
	});

	return obj;
}

export function followPropertyNamePath (obj = {}, propertyNames = [], defaultValue) {

	for (var i = 0; i < propertyNames.length; i++) {

		if (!isObject(obj)) {
			return defaultValue;
		}

		obj = obj[propertyNames[i]];
	}

	if (!isDefined(obj)) {
		return defaultValue;
	}

	return obj;
}

export function overwriteSomeProperties (obj1, obj2) {
	let result = clone(obj1);
	const obj2OwnProperties = getOwnProperties(obj2);

	obj2OwnProperties.forEach(prop => {

		if (!isAggregateEntity(obj2[prop])) {
			// If result and obj2 are both arrays, do not allow result to be shortened.

			if (prop !== 'length' || !isNumber(result.length) || !isNumber(obj2.length) || result.length < obj2.length) {
				result[prop] = obj2[prop];
			}
		} else if (!areTypesEqual(result[prop], obj2[prop])) {
			result[prop] = clone(obj2[prop]);
		} else {
			result[prop] = overwriteSomeProperties(result[prop], obj2[prop]);
		}
	});

	return result;
}

/*
export function overwriteSomePropertiesAlt1 (obj1, obj2) {
	return getOwnProperties(obj2).reduce(
		(accumulator, element) => { // element is the name of a property in obj2

			if (!isAggregateEntity(obj2[element])) {
				// If accumulator and obj2 are both arrays, do not allow accumulator to be shortened.

				if (element !== 'length' || !isNumber(accumulator.length) || !isNumber(obj2.length) || result.length < obj2.length) {
					accumulator[element] = obj2[element];
				}
			} else if (!areTypesEqual(accumulator[element], obj2[element])) {
				accumulator[element] = clone(obj2[element]);
			} else {
				accumulator[element] = overwriteSomeProperties(accumulator[element], obj2[element]);
			}
		},
		clone(obj1)
	);
}
 */
