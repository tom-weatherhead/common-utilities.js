// tom-weatherhead/common-utilities.js/test/main_spec.js

// Unit test specifications for Mocha

'use strict';

const assert = require('assert').strict;

const commonUtilities = require('..');

const array1Unsorted = [8, 6, 7, 5, 3, 0, 9];
const array1SortedNonDecreasing = [0, 3, 5, 6, 7, 8, 9];
const array1SortedNonIncreasing = [9, 8, 7, 6, 5, 3, 0];

const fnGreaterThan = (x, y) => x > y;

describe('App', () => {
	// Tests for arrays.js :

	describe('insertNumberIntoArray Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			const srcNumberToInsert = 4;
			const srcArray = [1, 2, 3, 5, 6, 7];
			const expectedResult = [1, 2, 3, 4, 5, 6, 7];

			// Act
			const actualResult = commonUtilities.insertNumberIntoArray(srcNumberToInsert, srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('insertNumberIntoArray Test 2', () => {
		it('Rocks!', done => {
			// Arrange
			const srcNumberToInsert = 4;
			const srcArray = [5, 6, 7];
			const expectedResult = [4, 5, 6, 7];

			// Act
			const actualResult = commonUtilities.insertNumberIntoArray(srcNumberToInsert, srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('insertNumberIntoArray Test 3', () => {
		it('Rocks!', done => {
			// Arrange
			const srcNumberToInsert = 4;
			const srcArray = [1, 2, 3];
			const expectedResult = [1, 2, 3, 4];

			// Act
			const actualResult = commonUtilities.insertNumberIntoArray(srcNumberToInsert, srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('insertionSort Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = array1Unsorted;
			const expectedResult1 = array1SortedNonDecreasing;
			const expectedResult2 = array1SortedNonIncreasing;

			// Act
			const actualResult1 = commonUtilities.insertionSort(srcArray);
			const actualResult2 = commonUtilities.insertionSort(srcArray, fnGreaterThan);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('removeDuplicatesFromArray Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = [1, 3, 1, 2, 4, 2, 3, 1, 1];
			const expectedResult = [1, 3, 2, 4];

			// Act
			const actualResult = commonUtilities.removeDuplicatesFromArray(srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('isDefined Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = [1, 2, 3];
			const expectedResult1 = true;
			const expectedResult2 = true;
			const expectedResult3 = false;

			// Act
			const actualResult1 = commonUtilities.isDefined(srcArray);
			const actualResult2 = commonUtilities.isDefined(srcArray.length);
			const actualResult3 = commonUtilities.isDefined(srcArray.leeength);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);
			assert.deepEqual(actualResult3, expectedResult3);

			done();
		});
	});

	describe('flattenOneLevel Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = [[1, 2], 3, [4, [5, [6, 7], 8, 9]], 10];
			const expectedResult = [1, 2, 3, 4, [5, [6, 7], 8, 9], 10];

			// Act
			const actualResult = commonUtilities.flattenOneLevel(srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('flattenAllLevels Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = [[1, 2], 3, [4, [5, [6, 7], 8, 9]], 10];
			const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

			// Act
			const actualResult = commonUtilities.flattenAllLevels(srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('bubbleSort Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = array1Unsorted;
			const expectedResult1 = array1SortedNonDecreasing;
			const expectedResult2 = array1SortedNonIncreasing;

			// Act
			const actualResult1 = commonUtilities.bubbleSort(srcArray);
			const actualResult2 = commonUtilities.bubbleSort(srcArray, fnGreaterThan);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('heapSort Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = array1Unsorted;
			const expectedResult1 = array1SortedNonDecreasing;
			const expectedResult2 = array1SortedNonIncreasing;

			// Act
			const actualResult1 = commonUtilities.heapSort(srcArray);
			const actualResult2 = commonUtilities.heapSort(srcArray, fnGreaterThan);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('mergeSort Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = array1Unsorted;
			const expectedResult1 = array1SortedNonDecreasing;
			const expectedResult2 = array1SortedNonIncreasing;

			// Act
			const actualResult1 = commonUtilities.mergeSort(srcArray);
			const actualResult2 = commonUtilities.mergeSort(srcArray, fnGreaterThan);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('quickSort Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = array1Unsorted;
			const expectedResult1 = array1SortedNonDecreasing;
			const expectedResult2 = array1SortedNonIncreasing;

			// Act
			const actualResult1 = commonUtilities.quickSort(srcArray);
			const actualResult2 = commonUtilities.quickSort(srcArray, fnGreaterThan);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('mergeTwoSortedArrays Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray1 = [1, 3];
			const srcArray2 = [2, 4];
			const expectedResult = [1, 2, 3, 4];

			// Act
			const actualResult = commonUtilities.mergeTwoSortedArrays(srcArray1, srcArray2);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('isArrayInNonDecreasingOrder Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray1 = [1, 2, 3, 4, 5];
			const srcArray2 = [1, 2, 3, 3, 5];
			const srcArray3 = [1, 2, 4, 3, 5];
			const expectedResult1 = true;
			const expectedResult2 = true;
			const expectedResult3 = false;

			// Act
			const actualResult1 = commonUtilities.isArrayInNonDecreasingOrder(srcArray1);
			const actualResult2 = commonUtilities.isArrayInNonDecreasingOrder(srcArray2);
			const actualResult3 = commonUtilities.isArrayInNonDecreasingOrder(srcArray3);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);
			assert.deepEqual(actualResult3, expectedResult3);

			done();
		});
	});

	describe('max Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray1 = [2, 1, 3, 5, 4];
			const srcArray2 = [5, 2, 1, 3, 4];
			const expectedResult1 = 5;
			const expectedResult2 = 5;

			// Act
			const actualResult1 = commonUtilities.max(srcArray1);
			const actualResult2 = commonUtilities.max(srcArray2);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('min Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray1 = [2, 1, 3, 5, 4];
			const srcArray2 = [1, 2, 3, 5, 4];
			const expectedResult1 = 1;
			const expectedResult2 = 1;

			// Act
			const actualResult1 = commonUtilities.min(srcArray1);
			const actualResult2 = commonUtilities.min(srcArray2);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('generateHierarchyOfLocalMaximaAndMinima Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray = [1, 3, 8, 2, 7, 5, 4, 6];
			const expectedResult = [
				[
					{ minimum: 1, maximum: 8 }
				],
				[
					{ minimum: 1, maximum: 8 },
					{ minimum: 4, maximum: 7 }
				],
				[
					{ minimum: 1, maximum: 3 },
					{ minimum: 2, maximum: 8 },
					{ minimum: 5, maximum: 7 },
					{ minimum: 4, maximum: 6 }
				],
				[
					{ minimum: 1, maximum: 1 },
					{ minimum: 3, maximum: 3 },
					{ minimum: 8, maximum: 8 },
					{ minimum: 2, maximum: 2 },
					{ minimum: 7, maximum: 7 },
					{ minimum: 5, maximum: 5 },
					{ minimum: 4, maximum: 4 },
					{ minimum: 6, maximum: 6 }
				]
			];

			// Act
			const actualResult = commonUtilities.generateHierarchyOfLocalMaximaAndMinima(srcArray);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('createArrayFromElement Test', () => {
		it('Rocks!', done => {
			// Arrange
			const obj = 'A';
			const length = 7;
			const expectedResult = ['A', 'A', 'A', 'A', 'A', 'A', 'A'];

			// Act
			const actualResult = commonUtilities.createArrayFromElement(obj, length);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			assert.equal(commonUtilities.createArrayFromElement('B'), null);
			assert.equal(commonUtilities.createArrayFromElement('C', -1), null);
			assert.deepEqual(commonUtilities.createArrayFromElement('D', 0), []);

			done();
		});
	});


	describe('createAndFillArray Test', () => {
		it('Rocks!', done => {
			// Arrange
			const obj = 'A';
			const dimension1 = 2;
			const dimension2 = 3;
			const dimension3 = 5;
			const expectedResult = [
				[
					['A', 'A', 'A', 'A', 'A'],
					['A', 'A', 'A', 'A', 'A'],
					['A', 'A', 'A', 'A', 'A']
				],
				[
					['A', 'A', 'A', 'A', 'A'],
					['A', 'A', 'A', 'A', 'A'],
					['A', 'A', 'A', 'A', 'A']
				]
			];

			// Act
			const actualResult = commonUtilities.createAndFillArray(obj, dimension1, dimension2, dimension3);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			assert.equal(commonUtilities.createAndFillArray('B'), 'B');
			assert.deepEqual(commonUtilities.createAndFillArray('C', 0), []);

			done();
		});
	});

	describe('normalizeArrayOfNumbers Test', () => {
		it('Rocks!', done => {
			// Arrange
			const array1 = [4, 6, 8, 7, 5];
			const expectedResult1 = [0, 0.5, 1, 0.75, 0.25];

			// Act
			const actualResult1 = commonUtilities.normalizeArrayOfNumbers(array1);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);

			done();
		});
	});

	// Tests for asynchronous.js :

	// Tests for dates.js :

	describe('getDateTimeString Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcDate = new Date(1971, 6, 13, 2, 3, 57);
			const expectedResult = '1971-07-13 02:03:57';

			// Act
			const actualResult = commonUtilities.getDateTimeString(srcDate);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('getDifferenceBetweenDatesAsObject Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputEarlierDate = new Date(2018, 3, 4, 5, 6, 7);
			const inputLaterDate = new Date(2018, 3, 4, 13, 12, 22);
			const expectedResult = {
				hours: 8,
				minutes: 6,
				seconds: 15
			};

			// Act
			const actualResult = commonUtilities.getDifferenceBetweenDatesAsObject(inputEarlierDate, inputLaterDate);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('getDifferenceBetweenDatesAsString Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputEarlierDate = new Date(2018, 3, 4, 5, 6, 7);
			const inputLaterDate = new Date(2018, 3, 4, 13, 12, 22);
			const expectedResult = '08h 06m 15s';

			// Act
			const actualResult = commonUtilities.getDifferenceBetweenDatesAsString(inputEarlierDate, inputLaterDate);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	// Tests for functions.js :

	describe('curry Test', () => {
		it('Rocks!', done => {
			// Arrange
			const expectedResult = 6;

			// Act
			const actualResult = commonUtilities.curry((x, y, z) => x + y + z)(1)(2)(3);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	/*
	// Tests for http.js :

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
	 */

	// Tests for json.js :

	// Tests for lazy.js :

	describe('makeLazyList Test', () => {
		it('Rocks!', done => {
			// Arrange
			const expectedResult = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]; // Fibonacci
			let b = commonUtilities.makeLazyList((x, y) => x + y, 1, 1);
			let actualResult = [];

			// Act

			for (let i = 0; i < 10; i++) {
				let a;

				[a, b] = b();
				actualResult.push(a);
			}

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	// Tests for numbers.js :

	describe('generateRange Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			const start = 3;
			const end = 5;
			const expectedResult = [3, 4, 5];

			// Act
			const actualResult = commonUtilities.generateRange(start, end);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('generateRange Test 2', () => {
		it('Rocks!', done => {
			// Arrange
			const start = 8;
			const end = 8;
			const expectedResult = [8];

			// Act
			const actualResult = commonUtilities.generateRange(start, end);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('generateRange Test 3', () => {
		it('Rocks!', done => {
			// Arrange
			const start = 8;
			const end = 7;
			const expectedResult = [];

			// Act
			const actualResult = commonUtilities.generateRange(start, end);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('generateFirstNNaturalNumbers Test', () => {
		it('Rocks!', done => {
			// Arrange
			const n = 7;
			const expectedResult = [1, 2, 3, 4, 5, 6, 7];

			// Act
			const actualResult = commonUtilities.generateFirstNNaturalNumbers(n);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('zeroPadNumber Test', () => {
		it('Rocks!', done => {
			// Arrange
			const n = 13;
			const desiredMinLength = 4;
			const expectedResult = '0013';

			// Act
			const actualResult = commonUtilities.zeroPadNumber(n, desiredMinLength);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('sum Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			const input = 'abc';
			const expectedResult = undefined;

			// Act
			const actualResult = commonUtilities.sum(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('sum Test 2', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [];
			const expectedResult = 0;

			// Act
			const actualResult = commonUtilities.sum(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('sum Test 3', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [2, 3, 5, 7];
			const expectedResult = 17;

			// Act
			const actualResult = commonUtilities.sum(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('sum Test 4', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [1, 'a', 2, {}, 3, /abc/, 4];
			const expectedResult = 10;

			// Act
			const actualResult = commonUtilities.sum(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('product Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [2, 3, 5, 7];
			const expectedResult = 210;

			// Act
			const actualResult = commonUtilities.product(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('product Test 2', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [1, 'a', 2, {}, 3, /abc/, 4];
			const expectedResult = 24;

			// Act
			const actualResult = commonUtilities.product(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('mean Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [2, 3, 5, 7];
			const expectedResult = 4.25;

			// Act
			const actualResult = commonUtilities.mean(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('median Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [1, 9, 1, 4, 6, 3, 2, 7, 8];
			const expectedResult = 4;

			// Act
			const actualResult = commonUtilities.median(input);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('histogram Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [5, 1, 2, 5, 6, 5, 5, 2, 1, 8, 5, 7, 5];
			const expectedResult = {
				1: 2,
				2: 2,
				5: 6,
				6: 1,
				7: 1,
				8: 1
			};

			// Act
			const actualResult = commonUtilities.histogram(input);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('mode Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = [5, 1, 2, 5, 6, 5, 5, 2, 1, 8, 5, 7, 5];
			const expectedResult = {
				element: '5', // The histogram() function uses the elements of the input array as keys in an object, so they are converted to strings.
				count: 6
			};

			// Act
			const actualResult = commonUtilities.mode(input);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('zeroExtendNumber Test', () => {
		it('Rocks!', done => {
			// Arrange
			const n = 1.25;
			const minNumberOfDecimalPlaces = 5;
			const expectedResult = '1.25000';

			// Act
			const actualResult = commonUtilities.zeroExtendNumber(n, minNumberOfDecimalPlaces);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('getSign Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = 'Foo';
			const input2 = 3.14;
			const input3 = -4;
			const input4 = 0;
			const expectedResult1 = undefined;
			const expectedResult2 = 1;
			const expectedResult3 = -1;
			const expectedResult4 = 0;

			// Act
			const actualResult1 = commonUtilities.getSign(input1);
			const actualResult2 = commonUtilities.getSign(input2);
			const actualResult3 = commonUtilities.getSign(input3);
			const actualResult4 = commonUtilities.getSign(input4);

			// Assert
			assert.equal(actualResult1, expectedResult1);
			assert.equal(actualResult2, expectedResult2);
			assert.equal(actualResult3, expectedResult3);
			assert.equal(actualResult4, expectedResult4);

			done();
		});
	});

	describe('isInteger Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = 0;
			const input2 = 1;
			const input3 = -1;
			const input4 = 12345;
			const input5 = 1.5;
			const input6 = undefined;
			const input7 = null;
			const input8 = NaN;
			const input9 = '';
			const input10 = 'abc';
			const input11 = [];
			const input12 = [1, 2, 3];
			const input13 = {};
			const input14 = { a: 1, b: 2 };
			const input15 = /abc/;
			const expectedResult1 = true;
			const expectedResult2 = true;
			const expectedResult3 = true;
			const expectedResult4 = true;
			const expectedResult5 = false;
			const expectedResult6 = false;
			const expectedResult7 = false;
			const expectedResult8 = false;
			const expectedResult9 = false;
			const expectedResult10 = false;
			const expectedResult11 = false;
			const expectedResult12 = false;
			const expectedResult13 = false;
			const expectedResult14 = false;
			const expectedResult15 = false;

			// Act
			const actualResult1 = commonUtilities.isInteger(input1);
			const actualResult2 = commonUtilities.isInteger(input2);
			const actualResult3 = commonUtilities.isInteger(input3);
			const actualResult4 = commonUtilities.isInteger(input4);
			const actualResult5 = commonUtilities.isInteger(input5);
			const actualResult6 = commonUtilities.isInteger(input6);
			const actualResult7 = commonUtilities.isInteger(input7);
			const actualResult8 = commonUtilities.isInteger(input8);
			const actualResult9 = commonUtilities.isInteger(input9);
			const actualResult10 = commonUtilities.isInteger(input10);
			const actualResult11 = commonUtilities.isInteger(input11);
			const actualResult12 = commonUtilities.isInteger(input12);
			const actualResult13 = commonUtilities.isInteger(input13);
			const actualResult14 = commonUtilities.isInteger(input14);
			const actualResult15 = commonUtilities.isInteger(input15);

			// Assert
			assert.equal(actualResult1, expectedResult1);
			assert.equal(actualResult2, expectedResult2);
			assert.equal(actualResult3, expectedResult3);
			assert.equal(actualResult4, expectedResult4);
			assert.equal(actualResult5, expectedResult5);
			assert.equal(actualResult6, expectedResult6);
			assert.equal(actualResult7, expectedResult7);
			assert.equal(actualResult8, expectedResult8);
			assert.equal(actualResult9, expectedResult9);
			assert.equal(actualResult10, expectedResult10);
			assert.equal(actualResult11, expectedResult11);
			assert.equal(actualResult12, expectedResult12);
			assert.equal(actualResult13, expectedResult13);
			assert.equal(actualResult14, expectedResult14);
			assert.equal(actualResult15, expectedResult15);

			done();
		});
	});

	describe('isNonNegativeInteger Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = 0;
			const input2 = 1;
			const input3 = -1;
			const input4 = 12345;
			const input5 = 1.5;
			const input6 = undefined;
			const input7 = null;
			const input8 = NaN;
			const input9 = '';
			const input10 = 'abc';
			const input11 = [];
			const input12 = [1, 2, 3];
			const input13 = {};
			const input14 = { a: 1, b: 2 };
			const input15 = /abc/;
			const expectedResult1 = true;
			const expectedResult2 = true;
			const expectedResult3 = false;
			const expectedResult4 = true;
			const expectedResult5 = false;
			const expectedResult6 = false;
			const expectedResult7 = false;
			const expectedResult8 = false;
			const expectedResult9 = false;
			const expectedResult10 = false;
			const expectedResult11 = false;
			const expectedResult12 = false;
			const expectedResult13 = false;
			const expectedResult14 = false;
			const expectedResult15 = false;

			// Act
			const actualResult1 = commonUtilities.isNonNegativeInteger(input1);
			const actualResult2 = commonUtilities.isNonNegativeInteger(input2);
			const actualResult3 = commonUtilities.isNonNegativeInteger(input3);
			const actualResult4 = commonUtilities.isNonNegativeInteger(input4);
			const actualResult5 = commonUtilities.isNonNegativeInteger(input5);
			const actualResult6 = commonUtilities.isNonNegativeInteger(input6);
			const actualResult7 = commonUtilities.isNonNegativeInteger(input7);
			const actualResult8 = commonUtilities.isNonNegativeInteger(input8);
			const actualResult9 = commonUtilities.isNonNegativeInteger(input9);
			const actualResult10 = commonUtilities.isNonNegativeInteger(input10);
			const actualResult11 = commonUtilities.isNonNegativeInteger(input11);
			const actualResult12 = commonUtilities.isNonNegativeInteger(input12);
			const actualResult13 = commonUtilities.isNonNegativeInteger(input13);
			const actualResult14 = commonUtilities.isNonNegativeInteger(input14);
			const actualResult15 = commonUtilities.isNonNegativeInteger(input15);

			// Assert
			assert.equal(actualResult1, expectedResult1);
			assert.equal(actualResult2, expectedResult2);
			assert.equal(actualResult3, expectedResult3);
			assert.equal(actualResult4, expectedResult4);
			assert.equal(actualResult5, expectedResult5);
			assert.equal(actualResult6, expectedResult6);
			assert.equal(actualResult7, expectedResult7);
			assert.equal(actualResult8, expectedResult8);
			assert.equal(actualResult9, expectedResult9);
			assert.equal(actualResult10, expectedResult10);
			assert.equal(actualResult11, expectedResult11);
			assert.equal(actualResult12, expectedResult12);
			assert.equal(actualResult13, expectedResult13);
			assert.equal(actualResult14, expectedResult14);
			assert.equal(actualResult15, expectedResult15);

			done();
		});
	});

	describe('isPositiveInteger Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = 0;
			const input2 = 1;
			const input3 = -1;
			const input4 = 12345;
			const input5 = 1.5;
			const input6 = undefined;
			const input7 = null;
			const input8 = NaN;
			const input9 = '';
			const input10 = 'abc';
			const input11 = [];
			const input12 = [1, 2, 3];
			const input13 = {};
			const input14 = { a: 1, b: 2 };
			const input15 = /abc/;
			const expectedResult1 = false;
			const expectedResult2 = true;
			const expectedResult3 = false;
			const expectedResult4 = true;
			const expectedResult5 = false;
			const expectedResult6 = false;
			const expectedResult7 = false;
			const expectedResult8 = false;
			const expectedResult9 = false;
			const expectedResult10 = false;
			const expectedResult11 = false;
			const expectedResult12 = false;
			const expectedResult13 = false;
			const expectedResult14 = false;
			const expectedResult15 = false;

			// Act
			const actualResult1 = commonUtilities.isPositiveInteger(input1);
			const actualResult2 = commonUtilities.isPositiveInteger(input2);
			const actualResult3 = commonUtilities.isPositiveInteger(input3);
			const actualResult4 = commonUtilities.isPositiveInteger(input4);
			const actualResult5 = commonUtilities.isPositiveInteger(input5);
			const actualResult6 = commonUtilities.isPositiveInteger(input6);
			const actualResult7 = commonUtilities.isPositiveInteger(input7);
			const actualResult8 = commonUtilities.isPositiveInteger(input8);
			const actualResult9 = commonUtilities.isPositiveInteger(input9);
			const actualResult10 = commonUtilities.isPositiveInteger(input10);
			const actualResult11 = commonUtilities.isPositiveInteger(input11);
			const actualResult12 = commonUtilities.isPositiveInteger(input12);
			const actualResult13 = commonUtilities.isPositiveInteger(input13);
			const actualResult14 = commonUtilities.isPositiveInteger(input14);
			const actualResult15 = commonUtilities.isPositiveInteger(input15);

			// Assert
			assert.equal(actualResult1, expectedResult1);
			assert.equal(actualResult2, expectedResult2);
			assert.equal(actualResult3, expectedResult3);
			assert.equal(actualResult4, expectedResult4);
			assert.equal(actualResult5, expectedResult5);
			assert.equal(actualResult6, expectedResult6);
			assert.equal(actualResult7, expectedResult7);
			assert.equal(actualResult8, expectedResult8);
			assert.equal(actualResult9, expectedResult9);
			assert.equal(actualResult10, expectedResult10);
			assert.equal(actualResult11, expectedResult11);
			assert.equal(actualResult12, expectedResult12);
			assert.equal(actualResult13, expectedResult13);
			assert.equal(actualResult14, expectedResult14);
			assert.equal(actualResult15, expectedResult15);

			done();
		});
	});

	describe('integerDivision Test', () => {
		it('Rocks!', done => {
			// Arrange
			const numerator1 = 22;
			const numerator2 = 0;
			const numerator3 = 'abc';
			const denominator1 = 7;
			const denominator2 = 0;
			const denominator3 = 'def';
			const expectedResult1 = 3;

			// Act
			const actualResult1 = commonUtilities.integerDivision(numerator1, denominator1);
			const actualResult2 = commonUtilities.integerDivision(numerator2, denominator2);
			const actualResult3 = commonUtilities.integerDivision(numerator3, denominator3);

			// Assert
			assert.equal(actualResult1, expectedResult1);
			assert.ok(Number.isNaN(actualResult2));
			assert.ok(Number.isNaN(actualResult3));

			done();
		});
	});

	describe('covariance and correlationCoefficient Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcArray1 = array1Unsorted;
			const srcArray2 = srcArray1.map(x => -x);
			const srcArray3 = commonUtilities.createArrayFromElement(1, srcArray1.length);
			const expectedResult1 = 1;
			const expectedResult2 = -1;
			const expectedResult3 = 0;
			const squared = x => x * x;

			// Act
			const actualResult1 = commonUtilities.correlationCoefficient(srcArray1, srcArray1);
			const actualResult2 = commonUtilities.correlationCoefficient(srcArray1, srcArray2);
			const actualResult3 = commonUtilities.correlationCoefficient(srcArray1, srcArray3);

			// Assert
			assert.equal(commonUtilities.covariance(srcArray1, srcArray1), squared(commonUtilities.standardDeviation(srcArray1)));
			assert.equal(commonUtilities.covariance(srcArray2, srcArray2), squared(commonUtilities.standardDeviation(srcArray2)));
			assert.equal(commonUtilities.covariance(srcArray3, srcArray3), squared(commonUtilities.standardDeviation(srcArray3)));
			assert.equal(actualResult1, expectedResult1);
			assert.equal(actualResult2, expectedResult2);
			assert.equal(actualResult3, expectedResult3);

			done();
		});
	});


	// Tests for objects.js :

	describe('clone Test', () => {
		it('Rocks!', done => {
			// Arrange
			const original = { a: 3, b: 'c' };

			// Act 1
			const clone = commonUtilities.clone(original);

			// Assert 1
			assert.deepEqual(original, clone);

			// Act 2
			original.a = 4;

			// Assert 2
			assert.equal(original.a, 4);
			assert.equal(original.b, 'c');
			assert.equal(clone.a, 3);
			assert.equal(clone.b, 'c');

			done();
		});
	});

	describe('copySpecifiedObjectProperties Test', () => {
		it('Rocks!', done => {
			// Arrange
			const original = { a: 1, b: 2, c: 3 };

			// Act
			const partialClone = commonUtilities.copySpecifiedObjectProperties([ 'a', 'c', 'd' ], original);

			// Assert
			assert.equal(partialClone.a, original.a);
			assert.ok(!commonUtilities.isDefined(partialClone.b));
			assert.equal(partialClone.c, original.c);
			assert.ok(!commonUtilities.isDefined(partialClone.d));

			done();
		});
	});

	describe('getOwnProperties Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcObject = { a: 1, c: 3, e: 5 };
			const expectedResult = [ 'a', 'c', 'e' ];

			// Act
			const actualResult = commonUtilities.getOwnProperties(srcObject);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('safeJsonParse Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcObject = { a: 1, b: 'bee', c: [], d: true };

			// Act
			const actualResult = commonUtilities.safeJsonParse(JSON.stringify(srcObject));

			// Assert
			assert.deepEqual(actualResult, srcObject);

			done();
		});
	});

	describe('copySpecifiedObjectProperties Test', () => {
		it('Rocks!', done => {
			// Arrange
			const srcObject = { a: 1, b: 'bee', c: [], d: true };

			// Act
			const actualResult = commonUtilities.safeJsonParse(JSON.stringify(srcObject));

			// Assert
			assert.deepEqual(actualResult, srcObject);

			done();
		});
	});

	describe('getProperty Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = { subObject1a: { subEntity1aa: '1aa', subEntity1ab: '1ab' }, subObject1b: { subEntity1ba: '1ba' } };
			const defaultValue = 'Foo';
			const propertyPath1 = 'subObject1a.subEntity1ab';
			const expectedResult1 = '1ab';
			const propertyPath2 = 'subObject3a.subEntity1ab';
			const expectedResult2 = defaultValue;

			// Act
			const actualResult1 = commonUtilities.getProperty(input, propertyPath1, defaultValue);
			const actualResult2 = commonUtilities.getProperty(input, propertyPath2, defaultValue);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('combineObjects Test', () => {
		it('Rocks!', done => {
			// Arrange
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

			// Act
			const actualResult1 = commonUtilities.combineObjects(...input);
			const actualResult2 = commonUtilities.combineObjects(input[0], input[1], input[2]);

			// Assert
			assert.deepEqual(actualResult1, expectedResult);
			assert.deepEqual(actualResult2, expectedResult);

			done();
		});
	});

	describe('deleteUndefinedValuesFromObject Test', () => {
		it('Rocks!', done => {
			// Arrange
			const input = {
				a: 1,
				b: undefined,
				c: null,
				d: 'Foo'
			};
			const expectedResult = {
				a: 1,
				c: null,
				d: 'Foo'
			};

			// Act
			const actualResult = commonUtilities.deleteUndefinedValuesFromObject(input);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('overwriteSomeProperties Test 1', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = {
				a: 1,
				b: 2
			};
			const input2 = {
				a: 4,
				c: 3
			};
			const expectedResult = {
				a: 4,
				b: 2,
				c: 3
			};

			// Act
			const actualResult = commonUtilities.overwriteSomeProperties(input1, input2);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	describe('overwriteSomeProperties Test 2', () => {
		it('Rocks!', done => {
			// Arrange
			const input1 = {
				a: 1,
				b: 2,
				d: [2, 3, 5],
				e: [23, 29, 31, 37, 41],
				f: /abc/,
				g: {
					foo1: 'bar1',
					foo2: 'bar2',
					foo3: 'bar3'
				}
			};
			const input2 = {
				a: 4,
				c: 3,
				d: [12, 13, 15, 17, 21],
				e: [123, 129, 131],
				f: [1, 1, 2, 3],
				g: {
					foo2: 'abc2'
				}
			};
			const expectedResult = {
				a: 4,
				b: 2,
				c: 3,
				d: [12, 13, 15, 17, 21],
				e: [123, 129, 131, 37, 41],
				f: [1, 1, 2, 3],
				g: {
					foo1: 'bar1',
					foo2: 'abc2',
					foo3: 'bar3'
				}
			};

			// Act
			const actualResult = commonUtilities.overwriteSomeProperties(input1, input2);

			// Assert
			assert.deepEqual(actualResult, expectedResult);

			done();
		});
	});

	// Tests for sets.js :

	describe('getAllSubsets Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputArray = [1, 2, 3];
			const expectedResult1 = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]];
			const expectedResult2 = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

			// Act
			const actualResult1 = commonUtilities.getAllSubsets(inputArray);
			const actualResult2 = commonUtilities.getAllSubsets(inputArray, true);

			// Assert
			assert.deepEqual(actualResult1, expectedResult1);
			assert.deepEqual(actualResult2, expectedResult2);

			done();
		});
	});

	describe('areSetsEqual Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputArray1 = [1, 2, 3];
			const inputArray2 = [3, 1, 2];
			const expectedResult = true;

			// Act
			const actualResult = commonUtilities.areSetsEqual(inputArray1, inputArray2);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	describe('union Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputArray = [
				['a', 'b', 'c'],
				['a', 'c', 'e'],
				['c', 'e', 'z']
			];
			const expectedResult = ['a', 'b', 'c', 'e', 'z'];

			// Act
			const actualResult1 = commonUtilities.union(...inputArray);
			const actualResult2 = commonUtilities.union(inputArray[0], inputArray[1], inputArray[2]);

			// Assert
			assert.deepEqual(actualResult1, expectedResult);
			assert.deepEqual(actualResult2, expectedResult);

			done();
		});
	});

	describe('intersection Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputArray = [
				['a', 'b', 'c', 'd', 'e', 'f'],
				['b', 'c', 'd', 'e'],
				['b', 'd', 'f']
			];
			const expectedResult = ['b', 'd'];

			// Act
			const actualResult1 = commonUtilities.intersection(...inputArray);
			const actualResult2 = commonUtilities.intersection(inputArray[0], inputArray[1], inputArray[2]);

			// Assert
			assert.deepEqual(actualResult1, expectedResult);
			assert.deepEqual(actualResult2, expectedResult);

			done();
		});
	});

	// Tests for strings.js :

	describe('replicateString Test', () => {
		it('Rocks!', done => {
			// Arrange
			const inputString = 'abc';
			const inputNumber = 4;
			const expectedResult = 'abcabcabcabc';

			// Act
			const actualResult = commonUtilities.replicateString(inputString, inputNumber);

			// Assert
			assert.equal(actualResult, expectedResult);

			done();
		});
	});

	// Tests for types.js :

	describe('Type Tests', () => {
		it('Rocks!', done => {
			let undefinedVar;
			const definedVar = 0;
			const testDate = new Date();
			const testArrayOfNumbers = [2, 3, 5, 7];
			const testObject = { key1: 'value1', key3: 3 };
			const testFunction = (a, b) => a + b;
			const testRegularExpression = /^[0-9]+$/;
			const testString = 'Hello world!';

			assert.equal(commonUtilities.getTypeString(undefined), '[object Undefined]');

			// The six 'falsy' values in JavaScript:
			assert.equal(commonUtilities.isDefined(undefined), false);
			assert.equal(commonUtilities.isDefined(null), true);
			assert.equal(commonUtilities.isDefined(0), true);
			assert.equal(commonUtilities.isDefined(NaN), true);
			assert.equal(commonUtilities.isDefined(''), true);
			assert.equal(commonUtilities.isDefined(false), true);

			assert.equal(commonUtilities.isDefined([]), true);
			assert.equal(commonUtilities.isDefined({}), true);
			assert.equal(commonUtilities.isDefined(/abc/), true);
			assert.equal(commonUtilities.isDefined(undefinedVar), false);
			assert.equal(commonUtilities.isDefined(definedVar), true);
			assert.equal(commonUtilities.isDefined(testObject.key1), true);
			assert.equal(commonUtilities.isDefined(testObject.key2), false);

			assert.equal(commonUtilities.getTypeString(testDate), '[object Date]');
			assert.equal(commonUtilities.isDate(testDate), true);
			assert.equal(commonUtilities.getTypeString(testArrayOfNumbers), '[object Array]');
			assert.equal(commonUtilities.isArray(testArrayOfNumbers), true);
			assert.equal(commonUtilities.isArrayOfNumbers(testArrayOfNumbers), true);
			assert.equal(commonUtilities.getTypeString(testArrayOfNumbers[0]), '[object Number]');
			assert.equal(commonUtilities.isNumber(testArrayOfNumbers[0]), true);
			assert.equal(commonUtilities.isNumber(NaN), false);
			assert.equal(commonUtilities.isNumber(Infinity), true);
			assert.equal(commonUtilities.isNumber(Number.EPSILON), true);
			assert.equal(commonUtilities.getTypeString(false), '[object Boolean]');
			assert.equal(commonUtilities.getTypeString(true), '[object Boolean]');
			assert.equal(commonUtilities.isBoolean(false), true);
			assert.equal(commonUtilities.isBoolean(true), true);
			assert.equal(commonUtilities.isBoolean(null), false);
			assert.equal(commonUtilities.isBoolean(undefined), false);
			assert.equal(commonUtilities.isBoolean(0), false);
			assert.equal(commonUtilities.isBoolean(1), false);
			assert.equal(commonUtilities.isBoolean(NaN), false);
			assert.equal(commonUtilities.getTypeString(testFunction), '[object Function]');
			assert.equal(commonUtilities.isFunction(testFunction), true);
			assert.equal(commonUtilities.getTypeString(testObject), '[object Object]');
			assert.equal(commonUtilities.isObject(testObject), true);
			assert.equal(commonUtilities.getTypeString(testRegularExpression), '[object RegExp]');
			assert.equal(commonUtilities.isRegularExpression(testRegularExpression), true);
			assert.equal(commonUtilities.getTypeString(testString), '[object String]');
			assert.equal(commonUtilities.isString(testString), true);

			done();
		});
	});

	describe('isArray Tests', () => {
		it('Rocks!', done => {
			assert.equal(commonUtilities.isArray([]), true);
			assert.equal(commonUtilities.isArray([1, 2, 3]), true);
			assert.equal(commonUtilities.isArray(undefined), false);
			assert.equal(commonUtilities.isArray(null), false);
			assert.equal(commonUtilities.isArray(true), false);
			assert.equal(commonUtilities.isArray(0), false);
			assert.equal(commonUtilities.isArray(/abc/), false);
			assert.equal(commonUtilities.isArray({}), false);
			assert.equal(commonUtilities.isArray('abc'), false);

			done();
		});
	});

	describe('isArrayOfNumbers Tests', () => {
		it('Rocks!', done => {
			assert.equal(commonUtilities.isArrayOfNumbers([]), true);
			assert.equal(commonUtilities.isArrayOfNumbers([1, 2.5, -3]), true);
			assert.equal(commonUtilities.isArrayOfNumbers(['abc']), false);
			assert.equal(commonUtilities.isArrayOfNumbers([1, 2, 3, false]), false);

			done();
		});
	});
});

// TODO: Tests to write:

// categorizeArrayElementsByFunction
// categorizeArrayElementsByProperty
// cloneArray
// findSuperlativeElement
// getLastElementOfArray
// getRandomArrayElement
// isArrayInDecreasingOrder
// isArrayInIncreasingOrder
// isArrayInNonIncreasingOrder

// asyncForEach
// asyncMap

// getDateString
// getDateUTCString
// getDateTimeUTCString

// booleanInvertFunction
// compositeFunctions
// identityFunction

// additiveIdentity,
// aToThePowerOfB,
// factory_fnRoundToNDigits,
// fnAddition,
// fnMultiplication,
// multiplicativeIdentity,
// standardDeviation,
// tenToThePowerOfN,

// isSubset
