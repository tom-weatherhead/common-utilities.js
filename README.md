# common-utilities.js
Common JavaScript utility functions

[![build status](https://secure.travis-ci.org/tom-weatherhead/common-utilities.js.svg)](https://travis-ci.org/tom-weatherhead/common-utilities.js)

- clone(arg) : object

- copySpecifiedObjectProperties(propertyList, src, dst = {}) : object

- generateFirstNNaturalNumbers(n) : number[]

- generateRange(start, end) : number[]

- getAllSubsets(obj[]) : obj[][]

- getDateTimeString(date) : string

- getOwnProperties(obj = {}) : string[]

- getTypeString(obj) : string

- histogram(any[]) : object[]

- insertNumberIntoArray(n, array) : number[]

- insertionSort(array) : number[]

- isArray(obj) : boolean

- isArrayOfNumbers(obj) : boolean

- isFunction(obj) : boolean

- isRegularExpression(obj) : boolean

- isDefined(obj) : boolean

- mean(number[]) : number

- median(number[]) : number

- mode(any[]) : object

- removeDuplicatesFromArray(array) : any[]

- replicateString(str, n) : string

- safeJsonParse(str) : object

- sum(number[]) : number

- zeroPadNumber(n, minLength) : string

	"devDependencies": {
		"@babel/core": "^7.1.6",
		"@babel/preset-env": "^7.1.6",
		"babel-loader": "^8.0.4",
		"babel-plugin-transform-class-properties": "^6.24.1",
		"babel-preset-minify": "^0.5.0",
		"grunt": "^1.0.3",
		"grunt-babel": "^8.0.0",
		"grunt-contrib-concat": "^1.0.1",
		"grunt-contrib-nodeunit": "^2.0.0",
		"grunt-eslint": "^21.0.0",
		"grunt-webpack": "^3.1.3",
		"webpack": "^4.26.1"
	},
