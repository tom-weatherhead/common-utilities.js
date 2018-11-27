const path = require('path');
// const commonUtilities = require(path.join(__dirname, '..', 'lib', 'common-utilities.es6.js'));
const commonUtilities = require(path.join(__dirname, '..', 'lib', 'common-utilities.js'));
// import * as commonUtilities from require(path.join(__dirname, '..', 'lib', 'common-utilities.es6.js'));

// exports.commonUtilitiesJs = {
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

		test.expect(4);
		test.deepEqual(commonUtilities.getTypeString(new Date()), '[object Date]', 'Should be \'[object Date]\'');
		test.deepEqual(commonUtilities.getTypeString(arrayOfNumbers), '[object Array]', 'Should be \'[object Array]\'');
		test.deepEqual(commonUtilities.getTypeString(arrayOfNumbers[0]), '[object Number]', 'Should be \'[object Number]\'');
		test.deepEqual(commonUtilities.getTypeString((a, b) => a + b), '[object Function]', 'Should be \'[object Function]\'');
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
		test.equal(commonUtilities.sum([1, 2, 3, false]), undefined, 'Should be undefined');
		test.equal(commonUtilities.sum([]), 0, 'Should be 0');
		test.equal(commonUtilities.sum([2, 3, 5, 7]), 17, 'Should be 17');
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
	}
};
