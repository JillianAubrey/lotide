const _deepEqual = require('./deepEqual');

const assertDeepEqual = function(actual, expected) {
  if (_deepEqual(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertDeepEqual;