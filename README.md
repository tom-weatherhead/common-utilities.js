# common-utilities.js
Common JavaScript utility functions

[![Build Status](https://secure.travis-ci.org/tom-weatherhead/common-utilities.js.svg)](https://travis-ci.org/tom-weatherhead/common-utilities.js)
[![npm](https://img.shields.io/npm/v/thaw-common-utilities.js.svg)](https://www.npmjs.com/package/thaw-common-utilities.js)
[![npm](https://img.shields.io/npm/dm/thaw-common-utilities.js.svg)](https://www.npmjs.com/package/thaw-common-utilities.js)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/tom-weatherhead/thaw-common-utilities.js/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/tom-weatherhead/thaw-common-utilities.js/badge.svg)](https://coveralls.io/github/tom-weatherhead/thaw-common-utilities.js)
[![Maintainability](https://api.codeclimate.com/v1/badges/141c7e0d80d10b10c42a/maintainability)](https://codeclimate.com/github/tom-weatherhead/thaw-common-utilities.js/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/tom-weatherhead/thaw-common-utilities.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/tom-weatherhead/thaw-common-utilities.js?targetFile=package.json)

## Installation
To install the stable version:
``` 
npm install --save thaw-common-utilities.js
```

## API Information

### Arrays
bubbleSort(array: number[]) : number[]
categorizeArrayElementsByFunction
categorizeArrayElementsByProperty
cloneArray
createArrayFromElement(element: any, length: number = 1, accumulator: any[] = []): any[]
findSuperlativeElement
flattenAllLevels(a: any[], b: any[] = []): any[]
flattenOneLevel(a: any[], b: any[] = []): any[]
generateHierarchyOfLocalMaximaAndMinima
getLastElementOfArray
getRandomArrayElement
heapSort(array: number[]) : number[]
insertionSort(array: number[]) : number[]
insertNumberIntoArray(n: number, array: number[]) : number[]
isArrayInDecreasingOrder
isArrayInIncreasingOrder
isArrayInNonDecreasingOrder
isArrayInNonIncreasingOrder
max
mergeSort(array: number[]) : number[]
mergeTwoSortedArrays
min
quickSort(array: number[]) : number[]
removeDuplicatesFromArray(array: any[]) : any[]

### Asynchronous
asyncForEach
asyncMap

### Dates
getDateString(date: Date) : string
getDateUTCString(date: Date) : string
getDateTimeString(date: Date) : string
getDateTimeUTCString(date: Date) : string
getDifferenceBetweenDatesAsObject(earlierDate: Date, laterDate: Date) : object
getDifferenceBetweenDatesAsString(earlierDate: Date, laterDate: Date) : string

### Functions
booleanInvertFunction
compositeFunctions
curry
identityFunction

### HTTP
getJson
postJson

### JSON
safeJsonParse(str: string) : object

### Lazy
makeLazyList

### Numbers
additiveIdentity
aToThePowerOfB
correlationCoefficient
covariance
factory_fnRoundToNDigits
fnAddition
fnMultiplication
generateFirstNNaturalNumbers(n: number) : number[]
generateRange(start: number, end: number) : number[]
getSign
histogram(arg: any[]) : object[]
integerDivision
isInteger
isNonNegativeInteger
isNonNegativeNumber
isPositiveInteger
isPositiveNumber
mean(arg: number[]) : number
median(arg: number[]) : number
mode(arg: any[]) : object
multiplicativeIdentity
product
standardDeviation
sum(arg: number[]) : number
tenToThePowerOfN
zeroExtendNumber
zeroPadNumber(n: number, minLength: number) : string

### Objects
clone(arg: any) : any
combineObjects(obj1: object, obj2: object, ...) : object
copySpecifiedObjectProperties(propertyList: string[], src: object, dst: object = {}) : object
deleteUndefinedValuesFromObject(obj: object) : object
getOwnProperties(obj: object = {}) : string[]
getProperty(obj: object, propertyPath: string, defaultValue: any) : any

### Sets
areSetsEqual(set1: any[], set2: any[], fnElementsAreEqual: function) : boolean
getAllSubsets(arg: any[], sortSubsets: boolean, fnSubsetComparator: function) : any[][]
intersection(set1: any[], set2: any[], ...) : any[]
isSubset(set1: any[], set2: any[], fnElementsAreEqual: function) : boolean
union(set1: any[], set2: any[], ...) : any[]

### Strings
replicateString(str: string, n: number) : string

### Types
getTypeString(arg: any) : string
ifDefinedElse(arg: any, dflt: any) : any
isArray(arg: any) : boolean
isArrayOfNumbers(arg: any) : boolean
isDate(arg: any) : boolean
isDefined(arg: any) : boolean
isFunction(arg: any) : boolean
isNumber(arg: any) : boolean
isObject(arg: any) : boolean
isRegularExpression(arg: any) : boolean
isString(arg: any) : boolean

## License
MIT
