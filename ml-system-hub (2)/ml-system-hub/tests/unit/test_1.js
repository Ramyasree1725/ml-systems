const { describe, it } = require('node:test');
const assert = require('assert');

describe('unit test suite 1', () => {
  it('basic assertion 1', () => {
    assert.strictEqual(1 + 1, 2);
  });
  it('object check 1', () => {
    assert.ok({ a: 1 });
  });
});
