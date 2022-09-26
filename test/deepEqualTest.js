const assert = require('chai').assert;
const deepEqual = require('../deepEqual');

describe("#deepEqual", () => {
  it("returns true when item1 and item2 are the same", () => {
    assert.strictEqual(deepEqual([{}], [{}]), true);
    assert.strictEqual(deepEqual([{a: 1}], [{a: 1}]), true);
    assert.strictEqual(deepEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
    assert.strictEqual(deepEqual({ c: "1", d: ["2", 3], e: {key: 'value'} }, { c: "1", e: {key: 'value'}, d: ["2", 3] }), true);
    assert.strictEqual(deepEqual({a: [{b: [{c: [{d: [1,2,3]}]}]}]}, {a: [{b: [{c: [{d: [1,2,3]}]}]}]}), true);
  });
  it("returns false when item1 and item2 are differnt", () => {
    assert.strictEqual(deepEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
    assert.strictEqual(deepEqual({a: [{b: [{c: [{d: [1,2,3]}]}]}]}, {a: [{b: [{c: [{d: [1,2,3,4]}]}]}]}), false);
  });
});