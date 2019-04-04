# common-utilities.js
Common JavaScript utility functions

[![build status](https://secure.travis-ci.org/tom-weatherhead/common-utilities.js.svg)](https://travis-ci.org/tom-weatherhead/common-utilities.js)

// Arrays
categorizeArrayElementsByFunction,
categorizeArrayElementsByProperty,
cloneArray,
createArrayFromElement(element: any, length: number = 1, accumulator: any[] = []): any[]

flattenAllLevels(a: any[], b: any[] = []): any[]

flattenOneLevel(a: any[], b: any[] = []): any[]

getLastElementOfArray,
getRandomArrayElement,
// getTestArray,
insertionSort,
insertNumberIntoArray,
removeDuplicatesFromArray,
union,

// Asynchronous
asyncForEach,
asyncMap,

// Dates
getDateString,
getDateUTCString,
getDateTimeString,
getDateTimeUTCString,
getDifferenceBetweenDatesAsObject,
getDifferenceBetweenDatesAsString,

// Functions
booleanInvertFunction,
compositeFunctions,
curry,
identityFunction,

// HTTP
getJson,
postJson,

// JSON
safeJsonParse,

// Lazy
makeLazyList,

// Math
histogram,
mean,
median,
mode,
sum,

// Numbers
additiveIdentity,
aToThePowerOfB,
factory_fnRoundToNDigits,
fnAddition,
fnMultiplication,
generateFirstNNaturalNumbers,
generateRange,
integerDivision,
isInteger,
multiplicativeIdentity,
product,
replicateString,
tenToThePowerOfN,
zeroExtendNumber,
zeroPadNumber,

// Objects
clone,
	- clone(arg: any) : any

combineObjects,
copySpecifiedObjectProperties,
	- copySpecifiedObjectProperties(propertyList: string[], src: object, dst: object = {}) : object

getOwnProperties,
getProperty,

// Sets
areSetsEqual,
getAllSubsets,
isSubset,

// Types
getTypeString,
isArray,
isArrayOfNumbers,
isDate,
isDefined,
isFunction,
isNumber,
isObject,
isRegularExpression,
isString

****

- generateFirstNNaturalNumbers(n: number) : number[]

- generateRange(start: number, end: number) : number[]

- getAllSubsets(arg: any[]) : any[][]

- getDateTimeString(date: Date) : string

- getDifferenceBetweenDatesAsObject(earlierDate: Date, laterDate: Date) : object

- getDifferenceBetweenDatesAsString(earlierDate: Date, laterDate: Date) : string

- getOwnProperties(obj: object = {}) : string[]

- getProperty (obj: object, propertyPath: string, defaultValue: any) : any

- getTypeString(arg: any) : string

- histogram(arg: any[]) : object[]

- insertNumberIntoArray(n: number, array: number[]) : number[]

- insertionSort(array: number[]) : number[]

- isArray(arg: any) : boolean

- isArrayOfNumbers(arg: any) : boolean

- isDate(arg: any) : boolean

- isDefined(arg: any) : boolean

- isFunction(arg: any) : boolean

- isNumber(arg: any) : boolean

- isObject(arg: any) : boolean

- isRegularExpression(arg: any) : boolean

- isString(arg: any) : boolean

- isSubset(set1: any[], set2: any[], fnElementsAreEqual: function) : boolean

- mean(arg: number[]) : number

- median(arg: number[]) : number

- mode(arg: any[]) : object

- removeDuplicatesFromArray(array: any[]) : any[]

- replicateString(str: string, n: number) : string

- safeJsonParse(str: string) : object

- sum(arg: number[]) : number

- zeroPadNumber(n: number, minLength: number) : string
