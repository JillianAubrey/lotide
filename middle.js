const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }

  const arrMid = Math.floor(arr.length / 2);
  
  if (isEven(arr.length)) {
    return arr.slice(arrMid - 1, arrMid + 1);
  } else {
    return arr.slice(arrMid, arrMid + 1);
  }
};

module.exports = middle;

// helper function, isEven
const isEven = function(num) {
  return num % 2 === 0;
};

// //TEST CODE
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);