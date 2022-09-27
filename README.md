# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jaubrey/lotide`

**Require it:**

`const _ = require('@jaubrey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: console.logs whether the assertion that actual is equal to expected passed or failed. eqArrays is used for comparision.
* `assertDeepEqual(actual, expected)`: console.logs whether the assertion that actual is equal to expected passed or failed. deepEqual is used for comparision.
* `assertEqual()`: console.logs whether the assertion that actual is equal to expected passed or failed. === is used for comparision.
* `assertObjectsEqual()`: console.logs whether the assertion that actual is equal to expected passed or failed. eqObjects is used for comparision.
* `countLetters()`: Returns an object with counts for each of the letters in str.
  * Case insensitive, all keys in returned object will be lower case.
* `countOnly(allItems, itemsToCount))`: Returns an object with the count of itemsToCount's keys with truthy values found within allItems. 0 counts are not included in the object. allItems must be an array and itemsToCount and object. Only supports primitive elements.
* `deepEqual(item1, item2)`: Returns true if items1 and item2 are identical and false if not.
  * Supports any amount of array/object nesting.
  * Does not support nested functions/methods
* `eqArrays(arr1, arr2)`: Returns true if arr1 and arr2 are two identical arrays, and false if not.
  * Does not support objects nested in arrays and will throw an error. Use deepEqual instead.
* `eqObjects(obj1, obj2)`: Returns true if obj1 and obj2 are two identical objects, and false if not.
  * Does not support arrays nested in objects and will throw an error. Use deepEqual instead.
* `eqType(item1, item2)`: Checks whether item1 and item2 have the same type. If not, returns false. If so, returns the type. Arrays are considered separately from objects, and two arrays will return 'array'.
* `findKey(obj, callback)`: Returns the first key in obj for which callback returns true. If no keys return true, returns undefined.
  * Will only ever return up to one key, even if multiple keys would make callback return true.
  * callback will only be passed the name of the key
* `findKeyByValue(obj, val)`: Returns the first key in obj whose value equals val. If there is not such key, returns undefined.
  * Only supports primitive values
  * Will only ever return up to one key, even if more of them have a value of val
* `flatten(source)`: Returns the source array with nested arrays flattened out into elements of the parent array (e.g. `flatten([1, [2, 3]])` will return `[1, 2, 3]`)
  * Only suuports one layer of nesting
* `head(arr)`: Returns the first element of arr.
* `letterPositions(str)`: Returns an object with an array of indices for each of the letters in str (e.g. `letterPotisions('aaA')` would return `{a: [0, 1, 2]}`)
  * Case insensitive, all keys in returned object will be lower case.
* `map(arr, callback)`: Returns an array with all elements of arr having been passed through callback.
  * callback will only be passed the array element itself.
* `middle(arr)`: Returns the middle element(s) of arr, as an array. If arr's length is 2 or less returns an empty array. If arr has an odd length returns the middle element (e.g. `middle([1, 2, 3])` returns `[2]`). Ir arr has an even length, returns the two middle elements (e.g. `middle([1, 2, 3, 4])` returns `[2, 3]`).
* `tail(arr)`: Returns all but the first element of arr, as an array.
* `takeUntil(arr, callback)`: Returns an array containing all elements of arr up to, but not including, the first element that makes callback return false.
  * callback will only be passed the array element itself.
* `without(source, itemsToRemove)`: Returns an array containing all the elements of the soure array, but without the elements of itemsToRemove. source and itemsToRemove must both be arrays.
  * Only supports primitive elements