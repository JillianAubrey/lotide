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
const map = function(array, callback) {
  let result = []
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];
let actual = map(words, word => word[0]);
let expected = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(actual, expected);

const numbers = [1, 2, 3, 4]
actual = map(numbers, function(x) {
  return x + 1;});
expected = [2, 3, 4, 5]
assertArraysEqual(actual, expected);

const sayHello = function(name) {
  return `Hello ${name}!`;
};
const names = ['Jillian', 'Marianne', 'Kate']
actual = map(names, sayHello);
expected = ['Hello Jillian!', 'Hello Marianne!', 'Hello Kate!']
assertArraysEqual(actual, expected);