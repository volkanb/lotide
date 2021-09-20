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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
  }
}

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
}

module.exports = middle;