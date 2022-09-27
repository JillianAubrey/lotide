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