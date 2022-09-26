const _eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (_eqArrays(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;