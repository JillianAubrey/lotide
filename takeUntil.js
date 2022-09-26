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

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const expected1 = [ 1, 2, 5, 7, 2 ]
// assertArraysEqual(results1, expected1);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
// assertArraysEqual(results2, expected2);

// const data3 = [1,2,3];
// const results3 = takeUntil(data3, x => false);
// const expected3 = [1,2,3];
// assertArraysEqual(results3, expected3);

// const data4 = [1,2,3];
// const results4 = takeUntil(data3, x => 1);
// const expected4 = [];
// assertArraysEqual(results4, expected4);