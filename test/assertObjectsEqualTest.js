const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it("should return true for equal objects", () => {
    assert.deepEqual({a: 1, b: 2}, {a: 1, b: 2});  
  });
});