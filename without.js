const without = function(source, itemsToRemove) {
  if (itemsToRemove.length === 0) {  //Bypasses the function if there's no items to remove
    return source;
  }
  
  let result = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

module.exports = without;

// //TEST CODE
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without([], [1]), []);

// //Test whether input array is modified
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);