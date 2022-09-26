const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const ac = { a: "1", c: "3"};
assertEqual(eqObjects(ab, ac), false);

const acNum = { a: 1, c: 3};
assertEqual(eqObjects(acNum, ac), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cde = { c: "1", d: ["2", 3], e: {key: 'value'} };
const ced = { c: "1", e: {key: 'value'}, d: ["2", 3] };
assertEqual(eqObjects(cde, ced), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false