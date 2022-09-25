const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// //TEST CODE
// let obj = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// let actual = findKey(obj, x => x.stars === 2);
// let expected = 'noma';
// assertEqual(actual, expected);

// actual = findKey(obj, x => x.stars === 4);
// expected = undefined;
// assertEqual(actual, expected);
