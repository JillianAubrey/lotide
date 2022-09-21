// eqArrays and assertArrasEqual, for testing
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const letterPositions = function(str) {
  let result = {};
  const strLower = str.toLowerCase();
  
  for (let i = 0; i < strLower.length; i ++) {
    if (strLower[i] === ' ') {
      continue;
    }
    if (!result[strLower[i]]) {
      result[strLower[i]] = [];
    }
    result[strLower[i]].push(i);
  }

  return result;
};

//TEST CODE
let testStr = 'LHL';
let result = letterPositions(testStr);
assertArraysEqual(result['l'], [0, 2]);
assertArraysEqual(result['h'], [1]);
//Test that string is not affected
assertArraysEqual([testStr], ['LHL']);