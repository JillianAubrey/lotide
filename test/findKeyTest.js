const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns the first key for which callback(value) returns true", () => {
    let obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    let actual = findKey(obj, x => x.stars === 2);
    let expected = 'noma';
    assert.strictEqual(actual, expected);
    
    actual = findKey(obj, x => x.stars === 4);
    expected = undefined;
    assert.strictEqual(actual, expected);
  });
});
