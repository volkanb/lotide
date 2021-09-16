const eqArrays = function (arr1, arr2) {
  res = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      res = (arr1[i] !== arr2[i]) ? false : true;
    }
  } else {
    res = false;
  }
  return res;
};

const eqObjects = function (obj1, obj2) {
  let result = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    result = false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        result = (eqArrays(obj1[key], obj2[key])) ? true : false;
      } else if (obj1[key] !== obj2[key]) {
        result = false;
        break;
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});