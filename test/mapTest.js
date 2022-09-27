const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("implements a callback on every element of provided array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    let actual = map(words, word => word[0]);
    let expected = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(actual, expected);

    const numbers = [1, 2, 3, 4];
    actual = map(numbers, function(x) {
      return x + 1;
    });
    expected = [2, 3, 4, 5];
    assert.deepEqual(actual, expected);

    const sayHello = function(name) {
      return `Hello ${name}!`;
    };
    const names = ['Jillian', 'Marianne', 'Kate'];
    actual = map(names, sayHello);
    expected = ['Hello Jillian!', 'Hello Marianne!', 'Hello Kate!'];
    assert.deepEqual(actual, expected);
  });
  it("does not modify the original array", () => {
    const names = ['Jillian', 'Marianne', 'Kate'];
    map(names, name => name[0]);
    assert.deepEqual(names, ['Jillian', 'Marianne', 'Kate']);
  });
});