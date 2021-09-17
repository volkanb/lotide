const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

