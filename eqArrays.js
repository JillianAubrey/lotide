const _eqType = require('./eqType');
const _eqObjects = require('./eqObjects');

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in arr1) {
    const type = _eqType(arr1[i], arr2[i]);
    switch (type) {
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