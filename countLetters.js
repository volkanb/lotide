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

module.exports = countLetters;