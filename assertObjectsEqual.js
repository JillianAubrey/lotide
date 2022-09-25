const eqObjects = require('./eqObjects');

//FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

//TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const ac = { a: "1", c: "3"};
// const acNum = { a: 1, c: 3};
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const cde = { c: "1", d: ["2", 3], e: {key: 'value'} };
// const ced = { c: "1", e: {key: 'value'}, d: ["2", 3] };

// console.log('These should pass');
// assertObjectsEqual(ab, ba); // >> true
// assertObjectsEqual(cd, dc); // >> true
// assertObjectsEqual(cde, ced); // >> true
// console.log('These should fail');
// assertObjectsEqual(ab, abc); // >> false
// assertObjectsEqual(ab, ac); // >> false
// assertObjectsEqual(acNum, ac); // >> false
// assertObjectsEqual(cd, cd2); // >> false