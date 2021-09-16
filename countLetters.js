const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function (str) {
  let results = {};
  for (let char of str) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

const str1 = "aabbccc";
const result1 = countLetters(str1);

console.log(result1);

assertEqual(result1["a"], 2);
assertEqual(result1["b"], 2);
assertEqual(result1["c"], 3);
assertEqual(result1["d"], undefined);