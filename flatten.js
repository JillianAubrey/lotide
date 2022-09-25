const flatten = function(source) {
  let result = [];

  for (const item of source) {
    if (Array.isArray(item)) {
      for (const innerItem of item) {
        result.push(innerItem);
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

module.exports = flatten;

// //TEST CODE
// assertArraysEqual(flatten([1, [2, 3]]), [1, 2, 3]);
// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten(['a', ['b', 'c']]), ['a', 'b', 'c']);

// //Test whether input array is modified
// const testArr = [1, [2, 3]];
// flatten(testArr);
// assertArraysEqual(testArr[1], [2, 3]); //assertArraysEqual cannot handle nested arrays, therefor just checking individual array element