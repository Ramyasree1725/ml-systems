const { describe, it } = require('node:test');
const assert = require('assert');

describe('unit test suite 3', () => {
  it('basic assertion 3', () => {
    assert.strictEqual(1 + 1, 2);
  });
  it('object check 3', () => {
    assert.ok({ a: 1 });
  });
});
