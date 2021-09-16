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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

let str1 = "hello";
let result1 = letterPositions(str1);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);
