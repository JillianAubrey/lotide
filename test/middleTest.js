const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns [] for an array with 2 or fewer items", () => {
    assert.deepEqual(middle([]), []);
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns the middle item for an array with an odd number of items", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns both middle items for an array with an even number of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("does not modify the original array", () => {
    const arr = [1,2,3];
    middle(arr);
    assert.deepEqual(arr, [1,2,3]);
  });
});
