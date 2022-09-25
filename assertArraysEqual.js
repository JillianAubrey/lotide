const _eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (_eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //TRUE
// assertArraysEqual([1, 2, 3], [3, 2, 1]); //FALSE

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //TRUE
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //FALSE

// assertArraysEqual([], []); //TRUE
// assertArraysEqual([1], [1]); //TRUE
// assertArraysEqual([1], [1, 2]); //FALSE