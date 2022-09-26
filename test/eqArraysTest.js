const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1], [1, 2]), false);

assertEqual(eqArrays([[1]], [[1]]), true);
assertEqual(eqArrays([[1]], [1]), false);

assertEqual(eqArrays([{}], [{}]), true);
assertEqual(eqArrays([{a: 1}], [{a: 1}]), true);
assertEqual(eqArrays([{a: 1}, {b:2}], [{b:2},{a: 1}]), false);