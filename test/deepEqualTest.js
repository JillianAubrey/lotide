const deepEqual = require('../deepEqual');
const assertEqual = require('../assertEqual');

assertEqual(deepEqual([{}], [{}]), true);
assertEqual(deepEqual([{a: 1}], [{a: 1}]), true);
assertEqual(deepEqual([{a: 1}, {b:2}], [{b:2},{a: 1}]), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(deepEqual(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(deepEqual(cd, cd2), false);

const cde = { c: "1", d: ["2", 3], e: {key: 'value'} };
const ced = { c: "1", e: {key: 'value'}, d: ["2", 3] };
assertEqual(deepEqual(cde, ced), true);