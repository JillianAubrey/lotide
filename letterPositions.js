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