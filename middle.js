//FUNCTION IMPLMENTATION
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }

  const arrMid = Math.floor(arr.length / 2);
  
  if (isEven(arr.length)) {
    return arr.slice(arrMid - 1, arrMid + 1);
  } else {
    return arr.slice(arrMid, arrMid + 1);
  }
};

// helper function, isEven
const isEven = function(num) {
  return num % 2 === 0;
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
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);