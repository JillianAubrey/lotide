//FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqObjects, a helper function
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!object2.hasOwnProperty(key) || typeof(object1[key]) !== typeof(object2[key]) || Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }

    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof(object1[key]) === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// eqArrays, a helper function for the helper function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const ac = { a: "1", c: "3"};
const acNum = { a: 1, c: 3};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cde = { c: "1", d: ["2", 3], e: {key: 'value'} };
const ced = { c: "1", e: {key: 'value'}, d: ["2", 3] };

console.log('These should pass');
assertObjectsEqual(ab, ba); // >> true
assertObjectsEqual(cd, dc); // >> true
assertObjectsEqual(cde, ced); // >> true
console.log('These should fail')
assertObjectsEqual(ab, abc); // >> false
assertObjectsEqual(ab, ac); // >> false
assertObjectsEqual(acNum, ac); // >> false
assertObjectsEqual(cd, cd2); // >> false