const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return [1, 2] for without([1, 2, 3], [3])", () => {
    assert.deepEqual([1, 2], without([1, 2, 3], [3])); 
  });
});