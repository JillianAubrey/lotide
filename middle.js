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

// helper function, isEven
const isEven = function(num) {
  return num % 2 === 0;
};

module.exports = middle;