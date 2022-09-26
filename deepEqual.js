const _eqType = require('./eqType');

const deepEqual = function(item1, item2) {
  const type = _eqType(item1, item2);
  switch (type) {
  case false:
    return false;
  case 'array':
    if (!deepEqArrays(item1, item2)) {
      return false;
    }
    break;
  case 'object':
    if (!deepEqObjects(item1, item2)) {
      return false;
    }
    break;
  default:
    if (item1 !== item2) {
      return false;
    }
  }
  return true;
};

const deepEqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const i in arr1) {
    if (!deepEqual(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};

const deepEqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!deepEqual(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
};

module.exports = deepEqual;