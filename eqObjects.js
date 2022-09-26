const _eqType = require('./eqType');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    const type = _eqType(object1[key], object2[key]);
    switch (type) {
    case false:
      return false;
    case 'array':
      throw new Error('eqObjects cannot handle nested arrays');
    case 'object':
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      break;
    default:
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;