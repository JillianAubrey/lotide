//assertEqual function imported for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  let result = {};
  noSpacesLower = str.toLowerCase().split(' ').join('');
  return noSpacesLower;
};

//TEST CODE
let result = countLetters('LHL');
console.log(result);
assertEqual(result['l'], 2);
assertEqual(result['h'], 2);

result = countLetters("lighthouse in the house")
console.log(result);