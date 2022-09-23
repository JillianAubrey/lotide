//assertEqual function imported for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

//FUNCTION IMPLEMENTATION
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

//TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);