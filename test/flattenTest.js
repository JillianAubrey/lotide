const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns a copy of the array, with elements of nested arrays as elements", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(flatten(['a', ['b', 'c']]), ['a', 'b', 'c']);
  });
  it("does not modify the original array", () => {
    const testArr = [1, [2, 3]];
    flatten(testArr);
    assert.deepEqual(testArr, [1, [2, 3]]);
  });
});