const { describe, it } = require('node:test');
const assert = require('assert');

describe('unit test suite 4', () => {
  it('basic assertion 4', () => {
    assert.strictEqual(1 + 1, 2);
  });
  it('object check 4', () => {
    assert.ok({ a: 1 });
  });
});
