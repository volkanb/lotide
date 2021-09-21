const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return [1, 2, 5, 7, 2] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)", () => {
    assert.deepEqual([1, 2, 5, 7, 2], takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)); 
  });

  it("should return ['I've', 'been', 'to', 'Hollywood'] for takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    assert.deepEqual(["I've", 'been', 'to', 'Hollywood'], takeUntil(["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'], x => x === ',')); 
  });
});