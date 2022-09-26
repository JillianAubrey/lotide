const _eqType = require('./eqType');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    const type = _eqType(obj1[key], obj2[key]);
    switch (type) {
    case false:
      return false;
    case 'array':
      throw new Error('eqObjects cannot handle nested arrays');
    case 'object':
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
      break;
    default:
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;