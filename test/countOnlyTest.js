const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns a count for all truthy values in itemsToCount, and no other values", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const actual = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: 1,
      Agouhanna: false });
    const expected = {
      Jason: 1,
      Fang: 2,
    };
    assert.deepEqual(actual, expected);
  });
});