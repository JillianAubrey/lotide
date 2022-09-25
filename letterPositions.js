const letterPositions = function(str) {
  let result = {};
  const strLower = str.toLowerCase();
  
  for (let i = 0; i < strLower.length; i ++) {
    if (strLower[i] === ' ') {
      continue;
    }
    if (!result[strLower[i]]) {
      result[strLower[i]] = [];
    }
    result[strLower[i]].push(i);
  }

  return result;
};

module.exports = letterPositions;

// //TEST CODE
// let testStr = 'LHL';
// let result = letterPositions(testStr);
// assertArraysEqual(result['l'], [0, 2]);
// assertArraysEqual(result['h'], [1]);
// //Test that string is not affected
// assertArraysEqual([testStr], ['LHL']);