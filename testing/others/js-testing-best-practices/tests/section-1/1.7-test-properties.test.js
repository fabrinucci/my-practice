const fc = require('fast-check');
const { sum } = require('../../utils/math');

describe('sum', () => {
  it('should be commutative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        return sum(a, b) === sum(b, a);
      })
    );
  });

  it('should be associative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
        return sum(a, sum(b, c)) === sum(sum(a, b), c);
      })
    );
  });

  it('should have zero as the identity element', () => {
    fc.assert(
      fc.property(fc.integer(), (a) => {
        return sum(a, 0) === a;
      })
    );
  });
});
