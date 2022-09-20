//FUNCTION IMPLMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays, a helper function
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //TRUE
assertArraysEqual([1, 2, 3], [3, 2, 1]); //FALSE

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //TRUE
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //FALSE

assertArraysEqual([], []); //TRUE
assertArraysEqual([1], [1]); //TRUE
assertArraysEqual([1], [1, 2]); //FALSE