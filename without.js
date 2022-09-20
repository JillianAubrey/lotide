//FUNCTION IMPLMENTATION
const without = function(source, itemsToRemove) {
  if (itemsToRemove.length === 0) {  //Bypasses the function if there's no items to remove
    return source;
  }
  
  let result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

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

//TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1]), []);

//Test whether input array is modified
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);