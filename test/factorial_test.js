import assert from 'assert';

import factorial from '../src/factorial.js';

describe('factorial', () => (
  it('should return factorial 4', () => (
    assert.equal(24, factorial(4))
  ))
));
