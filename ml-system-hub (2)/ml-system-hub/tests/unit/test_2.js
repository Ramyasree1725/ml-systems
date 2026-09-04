const { describe, it } = require('node:test');
const assert = require('assert');

describe('unit test suite 2', () => {
  it('basic assertion 2', () => {
    assert.strictEqual(1 + 1, 2);
  });
  it('object check 2', () => {
    assert.ok({ a: 1 });
  });
});
