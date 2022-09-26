const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const ac = { a: "1", c: "3"};
const acNum = { a: 1, c: 3};
const azb = { a: { z: 1 }, b: 2 };
const baz = { b: 2, a: { z: 1 }};
const ayzb = { a: { y: 0, z: 1 }, b: 2 };


describe("#eqObjects", () => {
  it("returns true when obj1 and obj2 are the same", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
    assert.strictEqual(eqObjects(azb, baz), true);
    assert.strictEqual(eqObjects({}, {}), true);
  });
  it("returns false when obj1 and obj2 are differnt", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
    assert.strictEqual(eqObjects(ab, ac), false);
    assert.strictEqual(eqObjects(ac, acNum), false);
    assert.strictEqual(eqObjects(azb, ayzb), false);
  });
});