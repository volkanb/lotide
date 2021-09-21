const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return [2, 3] for letterPositions('hello')['l']", () => {
    assert.deepEqual([2, 3], letterPositions('hello')['l']); 
  });
});