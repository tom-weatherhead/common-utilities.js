// tom-weatherhead/common-utilities.js/test/main_test.js

'use strict';

const commonUtilities = require('..');

module.exports = {
	setUp: function (done) {
		// this.kilobit = 500;
		done();
	},
	test1: function (test) {
		test.expect(1);
		test.equal('Hello world!', 'Hello world!', 'Should be \'Hello world!\'');
		test.done();
	},
	test2: function (test) {
		const arrayOfNumbers = [2, 3, 5, 7];

		test.expect(30);
		test.equal(commonUtilities.getTypeString(undefined), '[object Undefined]', 'Should be \'[object Undefined]\'');

		// The six 'falsy' values in JavaScript:
		// console.log(`commonUtilities.getTypeString(undefined) is ${commonUtilities.getTypeString(undefined)}`);
		test.equal(commonUtilities.isDefined(undefined), false, 'Should be false');
		test.equal(commonUtilities.isDefined(null), true, 'Should be true');
		test.equal(commonUtilities.isDefined(0), true, 'Should be true');
		test.equal(commonUtilities.isDefined(NaN), true, 'Should be true');
		test.equal(commonUtilities.isDefined(''), true, 'Should be true');
		test.equal(commonUtilities.isDefined(false), true, 'Should be true');

		test.equal(commonUtilities.isDefined([]), true, 'Should be true');
		test.equal(commonUtilities.isDefined({}), true, 'Should be true');
		test.equal(commonUtilities.isDefined(/abc/), true, 'Should be true');

		//

		let foo;

		test.equal(commonUtilities.isDefined(foo), false, 'Should be false');
		foo = 0;
		test.equal(commonUtilities.isDefined(foo), true, 'Should be true');

		foo = { key1: 'value1' };
		test.equal(commonUtilities.isDefined(foo.key1), true, 'Should be true');
		// test.equal(commonUtilities.isDefined(foo['key1']), true, 'Should be true');
		test.equal(commonUtilities.isDefined(foo.key2), false, 'Should be false');
		// test.equal(commonUtilities.isDefined(foo['key2']), false, 'Should be false');

		//

		test.equal(commonUtilities.getTypeString(new Date()), '[object Date]', 'Should be \'[object Date]\'');
		test.equal(commonUtilities.isDate(new Date()), true, 'Should be true');
		test.equal(commonUtilities.getTypeString(arrayOfNumbers), '[object Array]', 'Should be \'[object Array]\'');
		test.equal(commonUtilities.isArray(arrayOfNumbers), true, 'Should be true');
		test.equal(commonUtilities.getTypeString(arrayOfNumbers[0]), '[object Number]', 'Should be \'[object Number]\'');
		test.equal(commonUtilities.isNumber(arrayOfNumbers[0]), true, 'Should be true');
		test.equal(commonUtilities.isNumber(NaN), false, 'Should be false');
		test.equal(commonUtilities.isNumber(Infinity), true, 'Should be true');
		// test.equal(commonUtilities.isNumber(Epsilon), true, 'Should be true');
		test.equal(commonUtilities.getTypeString((a, b) => a + b), '[object Function]', 'Should be \'[object Function]\'');
		test.equal(commonUtilities.isFunction((a, b) => a + b), true, 'Should be true');
		test.equal(commonUtilities.getTypeString({ a: 1, b: 'two' }), '[object Object]', 'Should be \'[object Object]\'');
		test.equal(commonUtilities.isObject({ a: 1, b: 'two' }), true, 'Should be true');
		test.equal(commonUtilities.getTypeString(/^[0-9]+$/), '[object RegExp]', 'Should be \'[object RegExp]\'');
		test.equal(commonUtilities.isRegularExpression(/^[0-9]+$/), true, 'Should be true');
		test.equal(commonUtilities.getTypeString('Hello world!'), '[object String]', 'Should be \'[object String]\'');
		test.equal(commonUtilities.isString('Hello world!'), true, 'Should be true');
		test.done();
	},
	test3a: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.generateRange(3, 5), [3, 4, 5], 'Should be [3, 4, 5]');
		test.done();
	},
	test3b: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.generateRange(8, 8), [8], 'Should be [8]');
		test.done();
	},
	test3c: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.generateRange(8, 7), [], 'Should be []');
		test.done();
	},
	test4: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.generateFirstNNaturalNumbers(7), [1, 2, 3, 4, 5, 6, 7], 'Should be [1, 2, 3, 4, 5]');
		test.done();
	},
	test5: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.replicateString('abc', 4), 'abcabcabcabc', 'Should be \'abcabcabcabc\'');
		test.done();
	},
	test6: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.zeroPadNumber(13, 4), '0013', 'Should be \'0013\'');
		test.done();
	},
	test7: function (test) {
		test.expect(1);
		test.deepEqual(commonUtilities.getDateTimeString(new Date(1971, 6, 13, 2, 3, 57)), '1971-07-13 02:03:57', 'Should be \'1971-07-13 02:03:57\'');
		test.done();
	},
	test8a: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.insertNumberIntoArray(4, [1, 2, 3, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7], 'Should be [1, 2, 3, 4, 5, 6, 7]');
		test.done();
	},
	test8b: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.insertNumberIntoArray(4, [5, 6, 7]), [4, 5, 6, 7], 'Should be [4, 5, 6, 7]');
		test.done();
	},
	test8c: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.insertNumberIntoArray(4, [1, 2, 3]), [1, 2, 3, 4], 'Should be [1, 2, 3, 4]');
		test.done();
	},
	test9: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.insertionSort([8, 6, 7, 5, 3, 0, 9]), [0, 3, 5, 6, 7, 8, 9], 'Should be [0, 3, 5, 6, 7, 8, 9]');
		test.done();
	},
	test10: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.removeDuplicatesFromArray([1, 3, 1, 2, 4, 2, 3, 1, 1]), [1, 3, 2, 4], 'Should be [1, 3, 2, 4]');
		test.done();
	},
	test11: test => {
		const array = [1, 2, 3];

		test.expect(3);
		test.equal(commonUtilities.isDefined(array), true, 'Should be true');
		test.equal(commonUtilities.isDefined(array.length), true, 'Should be true');
		test.equal(commonUtilities.isDefined(array.leeength), false, 'Should be false');
		test.done();
	},
	test12: test => {
		const original = { a: 3, b: 'c' };
		const clone = commonUtilities.clone(original);

		test.expect(5);
		test.deepEqual(clone, original, 'Should be deepEqual');
		clone.a = 4;
		test.equal(original.a, 3, 'Should be 3');
		test.equal(original.b, 'c', 'Should be \'c\'');
		test.equal(clone.a, 4, 'Should be 4');
		test.equal(clone.b, 'c', 'Should be \'c\'');
		test.done();
	},
	test13: test => {
		const original = { a: 1, b: 2, c: 3 };
		const partialClone = commonUtilities.copySpecifiedObjectProperties([ 'a', 'c', 'd' ], original);

		test.expect(4);
		test.equal(partialClone.a, original.a, 'Should be original.a');
		test.equal(commonUtilities.isDefined(partialClone.b), false, 'Should be false');
		test.equal(partialClone.c, original.c, 'Should be original.c');
		test.equal(commonUtilities.isDefined(partialClone.d), false, 'Should be false');
		test.done();
	},
	test14: test => {
		test.expect(1);
		test.deepEqual(commonUtilities.getOwnProperties({ a: 1, c: 3, e: 5 }), [ 'a', 'c', 'e' ], 'Should be [ \'a\', \'c\', \'e\' ]');
		test.done();
	},
	test15: test => {
		const object1 = { a: 1, b: 'bee', c: [], d: true };
		test.expect(1);
		test.deepEqual(
			commonUtilities.safeJsonParse(JSON.stringify(object1)),
			object1,
			'Should be object1');
		test.done();
	},
	// TODO: Test uuid()
	/* test16: test => {
		test.expect(1);
		test.equal(commonUtilities.uuid(), 0, 'Should be 0');
		test.done();
	}, */
	test17: test => {
		test.expect(9);
		test.equal(commonUtilities.isArray([]), true, 'Should be true');
		test.equal(commonUtilities.isArray([1, 2, 3]), true, 'Should be true');
		test.equal(commonUtilities.isArray(undefined), false, 'Should be false');
		test.equal(commonUtilities.isArray(null), false, 'Should be false');
		test.equal(commonUtilities.isArray(true), false, 'Should be false');
		test.equal(commonUtilities.isArray(0), false, 'Should be false');
		test.equal(commonUtilities.isArray(/abc/), false, 'Should be false');
		test.equal(commonUtilities.isArray({}), false, 'Should be false');
		test.equal(commonUtilities.isArray('abc'), false, 'Should be false');
		test.done();
	},
	test18: test => {
		test.expect(4);
		test.equal(commonUtilities.isArrayOfNumbers([]), true, 'Should be true');
		test.equal(commonUtilities.isArrayOfNumbers([1, 2.5, -3]), true, 'Should be true');
		test.equal(commonUtilities.isArrayOfNumbers(['abc']), false, 'Should be false');
		test.equal(commonUtilities.isArrayOfNumbers([1, 2, 3, false]), false, 'Should be false');
		test.done();
	},
	test19: test => {
		test.expect(4);
		test.equal(commonUtilities.sum('abc'), undefined, 'Should be undefined');
		// test.equal(commonUtilities.sum([1, 2, 3, false]), undefined, 'Should be undefined');
		test.equal(commonUtilities.sum([]), 0, 'Should be 0');
		test.equal(commonUtilities.sum([2, 3, 5, 7]), 17, 'Should be 17');
		test.equal(commonUtilities.sum([1, 'a', 2, {}, 3, /abc/, 4]), 10, 'Should be 10');
		test.done();
	},
	test19b: test => {
		test.expect(2);
		test.equal(commonUtilities.product([2, 3, 5, 7]), 210, 'Should be 210');
		test.equal(commonUtilities.product([1, 'a', 2, {}, 3, /abc/, 4]), 24, 'Should be 24');
		test.done();
	},
	test20: test => {
		test.expect(1);
		test.equal(commonUtilities.mean([2, 3, 5, 7]), 4.25, 'Should be 4.25');
		test.done();
	},
	test21: test => {
		test.expect(1);
		test.equal(commonUtilities.median([1, 9, 1, 4, 6, 3, 2, 7, 8]), 4, 'Should be 4');
		test.done();
	},
	test22: test => {
		test.expect(1);
		test.deepEqual(
			commonUtilities.histogram([5, 1, 2, 5, 6, 5, 5, 2, 1, 8, 5, 7, 5]),
			{
				1: 2,
				2: 2,
				5: 6,
				6: 1,
				7: 1,
				8: 1
			},
			'Should be { element: 5, count: 6 }');
		test.done();
	},
	test23: test => {
		test.expect(1);
		test.deepEqual(
			commonUtilities.mode([5, 1, 2, 5, 6, 5, 5, 2, 1, 8, 5, 7, 5]),
			{ element: 5, count: 6 },
			'Should be { element: 5, count: 6 }');
		test.done();
	},
	test24: test => {
		test.expect(2);
		test.deepEqual(
			commonUtilities.getAllSubsets([1, 2, 3]),
			[[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]],
			'Should be [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]');
		test.deepEqual(
			commonUtilities.getAllSubsets([1, 2, 3], true),
			[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
			'Should be [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]');
		test.done();
	},
	test25: test => {
		test.expect(1);
		test.equal(
			commonUtilities.areSetsEqual([1, 2, 3], [3, 1, 2]), true, 'Should be true');
		test.done();
	},
	test26: test => {
		const input = [[1, 2], 3, [4, [5, [6, 7], 8, 9]], 10];
		const output = [1, 2, 3, 4, [5, [6, 7], 8, 9], 10];

		test.expect(1);
		test.deepEqual(
			commonUtilities.flattenOneLevel(input),
			output,
			`Should be ${output}`);
		test.done();
	},
	test27: test => {
		const input = [[1, 2], 3, [4, [5, [6, 7], 8, 9]], 10];
		const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		test.expect(1);
		test.deepEqual(
			commonUtilities.flattenAllLevels(input),
			output,
			`Should be ${output}`);
		test.done();
	},
	// getProperty (obj, propertyPath, defaultValue)
	test28: test => {
		const input1 = { subObject1a: { subEntity1aa: '1aa', subEntity1ab: '1ab' }, subObject1b: { subEntity1ba: '1ba' } };
		const defaultValue1 = 'Foo';
		const propertyPath1a = 'subObject1a.subEntity1ab';
		const output1a = '1ab';
		const propertyPath1b = 'subObject3a.subEntity1ab';
		const output1b = defaultValue1;

		test.expect(2);
		test.deepEqual(
			commonUtilities.getProperty(input1, propertyPath1a, defaultValue1),
			output1a,
			`Should be ${output1a}`);
		test.deepEqual(
			commonUtilities.getProperty(input1, propertyPath1b, defaultValue1),
			output1b,
			`Should be ${output1b}`);
		test.done();
	},
	test29: test => {
		const inputEarlierDate = new Date(2018, 3, 4, 5, 6, 7);
		const inputLaterDate = new Date(2018, 3, 4, 13, 12, 22);
		const output = {
			hours: 8,
			minutes: 6,
			seconds: 15
		};

		test.expect(1);
		test.deepEqual(
			commonUtilities.getDifferenceBetweenDatesAsObject(inputEarlierDate, inputLaterDate),
			output,
			`Should be ${output}`);
		test.done();
	},
	test30: test => {
		const inputEarlierDate = new Date(2018, 3, 4, 5, 6, 7);
		const inputLaterDate = new Date(2018, 3, 4, 13, 12, 22);
		const output = '08h 06m 15s';

		test.expect(1);
		test.deepEqual(
			commonUtilities.getDifferenceBetweenDatesAsString(inputEarlierDate, inputLaterDate),
			output,
			`Should be ${output}`);
		test.done();
	},
	test31: test => {
		const input_n = 1.25;
		const input_minNumberOfDecimalPlaces = 5;
		const output = '1.25000';

		test.expect(1);
		test.equal(
			commonUtilities.zeroExtendNumber(input_n, input_minNumberOfDecimalPlaces),
			output,
			`Should be ${output}`);
		test.done();
	},
	test32: test => {
		test.expect(2);
		commonUtilities.getJson('https://httpbin.org/json')
			.then(result => {
				const expectedStatus = 200;
				const expectedAuthor = 'Yours Truly';

				test.equal(result.status, expectedStatus, `Should be ${expectedStatus}`);
				test.equal(
					result.responseJson.slideshow.author,
					expectedAuthor,
					`Should be ${expectedAuthor}`);
				test.done();
			})
			.catch(error => {
				console.error('getJson: error is', error);
				throw error;
			});
	},
	test33: test => {
		const dataToPost = {
			name: 'Waldo',
			status: 'Silly'
		};

		test.expect(2);
		commonUtilities.postJson('https://httpbin.org/post', dataToPost)
			.then(result => {
				// const expectedStatus = 201; // Created

				test.equal(result.status === 200 || result.status === 201, true, 'Should be 200 or 201');
				test.deepEqual(
					result.responseJson.json,
					dataToPost,
					`Should be ${dataToPost}`);
				test.done();
			})
			.catch(error => {
				console.error('postJson: error is', error);
				throw error;
			});
	},
	test34: test => {
		const expectedResult = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

		test.expect(1);

		// let b = commonUtilities.makeLazyList(1, 1, (x, y) => x + y);
		let b = commonUtilities.makeLazyList((x, y) => x + y, 1, 1);
		let actualResult = [];

		for (let i = 0; i < 10; i++) {
			let a;

			[a, b] = b();
			actualResult.push(a);
			// console.log(`${i} : a is ${a}`);
		}

		test.deepEqual(actualResult, expectedResult, `Should be ${expectedResult}`);
		test.done();
	},
	test35: test => {
		const input = [
			['a', 'b', 'c'],
			['a', 'c', 'e'],
			['c', 'e', 'z']
		];
		const expectedResult = ['a', 'b', 'c', 'e', 'z'];

		test.expect(2);
		// From https://github.com/caolan/nodeunit :
		// deepEqual(actual, expected, [message]) - Tests for deep equality.
		test.deepEqual(
			commonUtilities.union(...input),
			expectedResult,
			`Should be ${expectedResult}`);
		test.deepEqual(
			commonUtilities.union(input[0], input[1], input[2]),
			expectedResult,
			`Should be ${expectedResult}`);
		test.done();
	},
	test36: test => {
		const input = [
			{
				w: 1,
				x: 2
			},
			{
				x: 2,
				y: 3
			},
			{
				w: 7,
				z: 13
			}
		];
		const expectedResult = {
			w: 7,
			x: 2,
			y: 3,
			z: 13
		};

		test.expect(2);
		test.deepEqual(
			commonUtilities.combineObjects(...input),
			expectedResult,
			`Should be ${expectedResult}`);
		test.deepEqual(
			commonUtilities.combineObjects(input[0], input[1], input[2]),
			expectedResult,
			`Should be ${expectedResult}`);
		test.done();
	},
	test37: test => {
		const actualResult = commonUtilities.curry((x, y, z) => x + y + z)(1)(2)(3);
		const expectedResult = 6;

		test.expect(1);
		test.equal(
			actualResult,
			expectedResult,
			`Should be ${expectedResult}`);
		test.done();
	}
};
