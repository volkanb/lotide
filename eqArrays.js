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

module.exports = eqArrays;