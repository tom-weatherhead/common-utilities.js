// tom-weatherhead/common-utilities.js/src/objects.js

'use strict';

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