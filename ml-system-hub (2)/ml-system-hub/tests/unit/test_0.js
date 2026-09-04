const { describe, it } = require('node:test');
const assert = require('assert');

describe('unit test suite 0', () => {
  it('basic assertion 0', () => {
    assert.strictEqual(1 + 1, 2);
  });
  it('object check 0', () => {
    assert.ok({ a: 1 });
  });
});
