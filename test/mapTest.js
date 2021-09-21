const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return ['g', 'c', 't', 'm', 't'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])", () => {
    assert.deepEqual(['g', 'c', 't', 'm', 't'], map(['ground', 'control', 'to', 'major', 'tom'], word => word[0])); 
  });

  it("should return ['d', 'l', 'o', 'r', 'm'] for map(['ground', 'control', 'to', 'major', 'tom'], word => word[word.length - 1]", () => {
    assert.deepEqual(['d', 'l', 'o', 'r', 'm'], map(['ground', 'control', 'to', 'major', 'tom'], word => word[word.length - 1])); 
  });
});