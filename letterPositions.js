//assertEqual function imported for testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATION
const letterPositions = function(str) {
  let result = {};
  const strLower = str.toLowerCase();
  
  for (let i = 0; i < strLower.length; i ++) {
    if (strLower[i] = ' ') {
      continue;
    }
    if (!result[strLower[i]]) {
      result[strLower[i]] = [];
    }
    result[strLower[i]].push(i);
  }

  return result;
};

//TEST CODE
let result = letterPositions('LHL');
//console.log(result);
assertEqual(result['l'], [0, 2]);
assertEqual(result['h'], [1]);