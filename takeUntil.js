const takeUntil = function(arr, callback) {
  let result = [];

  for (const element of arr) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

module.exports = takeUntil;