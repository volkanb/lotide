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

const without = function (source, itemsToRemove) {
  let result = source;
  let indexToRemove = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      indexToRemove.push(i);
    }
  }
  for (let i = 0; i < indexToRemove.length; i++) {
    result.splice(indexToRemove[i], 1);
  }
  return result;
}

assertArraysEqual([1, 2], without([1, 2, 3], [3])); // should pass
assertArraysEqual([15, 25], without([15, 25, 35], [3])); // should fail