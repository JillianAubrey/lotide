//assertEqual function imported for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const findKey = function(obj, callback) {
  for (key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

//TEST CODE
let obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let actual = findKey(obj, x => x.stars === 2);
let expected = 'noma';
assertEqual(actual, expected);

actual = findKey(obj, x => x.stars === 4);
expected = undefined;
assertEqual(actual, expected);
