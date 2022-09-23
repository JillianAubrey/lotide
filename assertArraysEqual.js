//FUNCTION IMPLMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

// eqArrays, a helper function
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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //TRUE
assertArraysEqual([1, 2, 3], [3, 2, 1]); //FALSE

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //TRUE
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //FALSE

assertArraysEqual([], []); //TRUE
assertArraysEqual([1], [1]); //TRUE
assertArraysEqual([1], [1, 2]); //FALSE