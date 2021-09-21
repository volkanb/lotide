const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return the correct count of letters for a given string", () => {
    const str1 = "aabbccc";
    const result1 = countLetters(str1);
    assert.strictEqual(result1["a"], 2);
    assert.strictEqual(result1["b"], 2);
    assert.strictEqual(result1["c"], 3);
    assert.strictEqual(result1["d"], undefined);
  });
});