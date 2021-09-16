const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);