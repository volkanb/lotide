const takeUntil = (arr, callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return result;
    }
    result.push(arr[i]);
  }
};

module.exports = takeUntil;