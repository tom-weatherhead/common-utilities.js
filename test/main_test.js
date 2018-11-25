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
		test.expect(1);
		test.deepEqual(commonUtilities.getTypeString(new Date()), '[object Date]', 'Should be \'[object Date]\'');
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
	}
};
