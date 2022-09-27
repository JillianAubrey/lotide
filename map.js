const map = function(arr, callback) {
  let result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;