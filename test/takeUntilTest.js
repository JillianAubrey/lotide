const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns an array with every element of provided array, up to but not including the element where callback returns truthy", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    const expected1 = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(results1, expected1);

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    assert.deepEqual(results2, expected2);

    const data3 = [1,2,3];
    const results3 = takeUntil(data3, () => false);
    const expected3 = [1,2,3];
    assert.deepEqual(results3, expected3);

    const data4 = [1,2,3];
    const results4 = takeUntil(data4, () => 1);
    const expected4 = [];
    assert.deepEqual(results4, expected4);
  });
  it("does not modify the original array", () => {
    const data4 = [1,2,3];
    takeUntil(data4, () => 1);
    assert.deepEqual(data4, [1,2,3]);
  });
});

