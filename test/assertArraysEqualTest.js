const assertArraysEqual = require('../assertArraysEqual');

console.log('---');
console.log('assertArraysEqual');
console.log('These should pass:');
assertArraysEqual([1, 2, 3], [1, 2, 3]); //TRUE
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //TRUE
assertArraysEqual([], []); //TRUE
assertArraysEqual([1], [1]); //TRUE

console.log('These should fail:');
assertArraysEqual([1, 2, 3], [3, 2, 1]); //FALSE
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //FALSE
assertArraysEqual([1], [1, 2]); //FALSE
console.log('---');