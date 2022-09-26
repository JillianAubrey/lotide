const eqType = require('../eqType');
const assertEqual = require('../assertEqual');

assertEqual(eqType(5, 6), 'number');
assertEqual(eqType('abc', 'def'), 'string');
assertEqual(eqType([1,2], []), 'array');
assertEqual(eqType({}, {key: 0}), 'object');
assertEqual(eqType([], {key: 0}), false);
assertEqual(eqType(5, '5'), false);
assertEqual(eqType(5, {5: 5}), false);
assertEqual(eqType(5, [5]), false);
assertEqual(eqType(5, undefined), false);