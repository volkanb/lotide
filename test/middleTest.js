const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // should pass
assertArraysEqual([2], middle([1, 2, 3])); // should pass
assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5])); // should pass