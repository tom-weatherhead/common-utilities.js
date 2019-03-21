// tom-weatherhead/common-utilities.js/src/lazy.js

'use strict';

// 1)
/*
export function makeLazyList (x, y) {
	return () => [x, makeLazyList(y, x + y)];
}

let b = makeLazyList(1, 1);
 */

// 2) Or: function makeList (x, y, fn) { .. } , where fn = (x, y) => x + y;
export function makeLazyList (x, y, fn) {
	return () => [x, makeLazyList(y, fn(x, y), fn)];
}
