
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns a count of all letters in the string, skipping spaces", () => {
    let actual = countLetters('LHL');
    let expected = {l:2, h:1};
    assert.deepEqual(actual,expected);

    actual = countLetters('lighthouse house');
    expected =  {
      l: 1,
      i: 1,
      g: 1,
      h: 3,
      t: 1,
      o: 2,
      u: 2,
      s: 2,
      e: 2,
    }
    assert.deepEqual(actual,expected);
  });
  it("doesn't include letters not in the string", () => {
    const result = countLetters('abc');
    assert.strictEqual(result.z, undefined);
  });
});