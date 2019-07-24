// tom-weatherhead/common-utilities.js/test/main_test.js

// Unit test specifications for Mocha

'use strict';

// const chai = require('chai');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);

// const expect = chai.expect;
// const assert = chai.assert;

const assert = require('assert').strict;

// const commonUtilities = require('..');

// const array1Unsorted = [8, 6, 7, 5, 3, 0, 9];
// const array1SortedNonDecreasing = [0, 3, 5, 6, 7, 8, 9];
// const array1SortedNonIncreasing = [9, 8, 7, 6, 5, 3, 0];

// const fnGreaterThan = (x, y) => x > y;

describe('App', function () {
	describe('test1', () => {
		it('Rocks!', done => {
			// Arrange

			// Act

			// Assert
			// expect(123).to.be.not.null;				// eslint-disable-line no-unused-expressions
			assert.equal(123, 123);
			// assert.deepEqual(123, 123);

			done();
		});
	});

	/*
	testDescriptors.forEach(testDescriptor => {
		console.log('testDescriptor is', testDescriptor);
		describe(testDescriptor.name, function () {
			it('Rocks!', function (done) {
				// Arrange
				const url = '/tictactoe/' + testDescriptor.boardString.replace(/ /g, 'E') + '/' + testDescriptor.maxPly;

				// Act
				//chai.request(app).get(url).end(function (error, result) {
				chai.request(app).get(url).then(result => {
					//console.log('result is', result);
					console.log('result.status is', result.status);
					console.log('result.text is', result.text);
					// Assert

					//expect(error).to.be.null;										// eslint-disable-line no-unused-expressions
					expect(result).to.be.not.null;									// eslint-disable-line no-unused-expressions
					expect(result.body).to.be.not.null;								// eslint-disable-line no-unused-expressions

					if (result.status === 200) {
						expect(testDescriptor.verificationFunction).to.be.not.null;		// eslint-disable-line no-unused-expressions
						testDescriptor.verificationFunction(gameEngine, expect, result.body);
					} else {
						expect(testDescriptor.errorHandlingFunction).to.be.not.null;	// eslint-disable-line no-unused-expressions
						testDescriptor.errorHandlingFunction(gameEngine, expect, result.text);
					}

					done();
				});
			});
		});
	});
	 */
});
