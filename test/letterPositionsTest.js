const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#lettPositions", () => {
  it("returns an object with positions of each letter", () => {
    let testStr = 'LHL';
    let actual = letterPositions(testStr);
    let expected = {
      l: [0, 2],
      h: [1],
    };
    assert.deepEqual(actual, expected);
  });
  it("does not modify the original array", () => {
    let testStr = 'LHL';
    letterPositions(testStr);
    assert.strictEqual(testStr, 'LHL');
  });
});