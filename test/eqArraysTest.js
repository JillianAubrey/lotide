const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true when arr1 and arr2 are the same", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
    assert.strictEqual(eqArrays([], []), true);
    assert.strictEqual(eqArrays([1], [1]), true);
    assert.strictEqual(eqArrays([[1]], [[1]]), true);
  });
  it("returns false when arr1 and arr2 are differnt", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
    assert.strictEqual(eqArrays([1], [1, 2]), false);
    assert.strictEqual(eqArrays([[1]], [1]), false);
  });
});