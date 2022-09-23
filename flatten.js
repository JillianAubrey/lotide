// eqArrays and assertArrasEqual, for testing
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in arr1) {
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) {
        return false;
      }
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

//FUNCTION IMPLMENTATION
const flatten = function(source) {
  let result = [];

  for (const item of source) {
    if (Array.isArray(item)) {
      for (const innerItem of item) {
        result.push(innerItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

//TEST CODE
assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['a', ['b', 'c']]), ['a', 'b', 'c']);

//Test whether input array is modified
const testArr = [1, [2, 3]];
flatten(testArr);
assertArraysEqual(testArr[1], [2, 3]); //assertArraysEqual cannot handle nested arrays, therefor just checking individual array element