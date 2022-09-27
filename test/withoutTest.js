const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns an array without provided values", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
    assert.deepEqual(without([], [1]), []);
  });
  it("does not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ['hello']);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
