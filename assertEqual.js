// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(1, 1);
assertEqual(1, 5);
assertEqual(1 + 2, 3);
assertEqual(1, '1');
assertEqual('Jillian', "Jillian");
assertEqual('Jill' + 'ian', 'Jillian');
assertEqual('Jill', 'Jillian');
