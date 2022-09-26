const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const ac = { a: "1", c: "3"};
const ca = {c: "3", a: "1"};
const acNum = { a: 1, c: 3};


console.log('---');
console.log('#assertObjectsEqual');
console.log('These should pass');
assertObjectsEqual(ab, ba);
assertObjectsEqual(ac, ca);
console.log('These should fail');
assertObjectsEqual(ab, abc);
assertObjectsEqual(ab, ac);
assertObjectsEqual(acNum, ac);
console.log('---');