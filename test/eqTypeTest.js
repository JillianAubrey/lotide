const assert = require('chai').assert;
const eqType = require('../eqType');

describe("#eqType", () => {
  it("returns the type when item1 and item2 are of the same type", () => {
    assert.strictEqual(eqType(5, 6), 'number');
    assert.strictEqual(eqType('abc', 'def'), 'string');
    assert.strictEqual(eqType([1,2], []), 'array');
    assert.strictEqual(eqType({}, {key: 0}), 'object');
  });
  it("returns false when item1 and item2 have different types", () => {
    assert.strictEqual(eqType([], {key: 0}), false);
    assert.strictEqual(eqType(5, '5'), false);
    assert.strictEqual(eqType(5, {5: 5}), false);
    assert.strictEqual(eqType(5, [5]), false);
    assert.strictEqual(eqType(5, undefined), false);
  });
});