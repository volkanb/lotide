const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']); 
  });

  it("should not modify the original array", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    tail(input);
    assert.deepEqual(input, ['Hello', 'Lighthouse', 'Labs']); 
  });

  it("should return [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });
});