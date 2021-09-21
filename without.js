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

module.exports = without;