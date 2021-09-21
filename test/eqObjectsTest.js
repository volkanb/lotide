const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true for equal objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba)); 
  });

  it("should return false for non-equal objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1" };
    assert.isFalse(eqObjects(ab, ba)); 
  });
});