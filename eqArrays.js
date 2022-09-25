const _eqType = require('./eqType');
const _eqObjects = require('./eqObjects');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in arr1) {
    const type = _eqType(arr1[i], arr2[i]);
    switch(type) {
      case false:
        return false;
      case 'array':
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
        continue;
      case 'object':
        if (!_eqObjects(arr1[i], arr2[i])) {
          return false;
        }
        continue;
      default:
        if (arr1[i] !== arr2[i]) {
          return false;
        }
    }
  }
  return true;
};

module.exports = eqArrays;

// TEST CODE
// const assertEqual = require('./assertEqual');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1], [1]), true);
// assertEqual(eqArrays([1], [1, 2]), false);

// assertEqual(eqArrays([[1]], [[1]]), true);
// assertEqual(eqArrays([[1]], [1]), false);

// assertEqual(eqArrays([{}], [{}]), true);
// assertEqual(eqArrays([{a: 1}], [{a: 1}]), true);
// assertEqual(eqArrays([{a: 1}, {b:2}], [{b:2},{a: 1}]), false);