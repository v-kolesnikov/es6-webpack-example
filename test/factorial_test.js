import assert from 'assert';

import factorial from '../lib/factorial.js';

describe('factorial', () => (
  it('should return factorial 4', () => (
    assert.equal(24, factorial(4))
  ))
));
