const _eqType = require('./eqType');
const _eqArrays = require('./eqArrays');

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
      if (!_eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    case 'object':
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
      continue;
    default:
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;

//TEST CODE
// const assertEqual = require('./assertEqual');
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const ac = { a: "1", c: "3"};
// assertEqual(eqObjects(ab, ac), false);

// const acNum = { a: 1, c: 3};
// assertEqual(eqObjects(acNum, ac), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// const cde = { c: "1", d: ["2", 3], e: {key: 'value'} };
// const ced = { c: "1", e: {key: 'value'}, d: ["2", 3] };
// assertEqual(eqObjects(cde, ced), true);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false