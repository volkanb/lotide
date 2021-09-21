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

module.exports = eqObjects;