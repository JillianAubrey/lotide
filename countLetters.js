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