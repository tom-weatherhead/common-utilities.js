// tom-weatherhead/common-utilities.js/src/lazy.js

'use strict';

import {
	cloneArray
} from './arrays.js';

// 1)
/*
export function makeLazyList (x, y) {
	return () => [x, makeLazyList(y, x + y)];
}

let b = makeLazyList(1, 1);

// 2) Or: function makeList (x, y, fn) { .. } , where fn = (x, y) => x + y;
export function makeLazyList (x, y, fn) {
	return () => [x, makeLazyList(y, fn(x, y), fn)];
}
 */

// 3)

function pushMe (array, element) {
	array.push(element);

	return array;
}

// Here, fn can be an n-ary function, not just a binary function:

export function makeLazyList (fn, ...args) {
	// const argsClone = args.slice(0); // See https://davidwalsh.name/javascript-clone-array
	const argsClone = cloneArray(args);
	const arg1 = args.shift();

	return () => [arg1, makeLazyList(fn, ...pushMe(args, fn(...argsClone)))];
}
