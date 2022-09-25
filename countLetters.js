const countLetters = function(str) {
  let result = {};
  const noSpacesLower = str.toLowerCase().split(' ').join('');
  
  for (const char of noSpacesLower) {
    if (!result[char]) {
      result[char] = 0;
    }
    result[char] ++;
  }

  return result;
};

module.exports = countLetters;

// //TEST CODE
// let result = countLetters('LHL');
// //console.log(result);
// assertEqual(result['l'], 2);
// assertEqual(result['h'], 1);

// let testStr = 'lighthouse in the house';
// result = countLetters(testStr);
// //console.log(result);
// assertEqual(result['l'], 1);
// assertEqual(result['i'], 2);
// assertEqual(result['g'], 1);
// assertEqual(result['h'], 4);
// assertEqual(result['t'], 2);
// assertEqual(result['z'], undefined);
// //Test to ensure original string is not affected
// assertEqual(testStr, 'lighthouse in the house');