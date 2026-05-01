const numberChecker = require('./numberChecker')

describe('numberChecker', () => {
  test.skip('returns true when number is 1000', () => {
    expect(numberChecker(1000)).toEqual(true);
  });
  test.skip('returns true when number is 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
  test.skip('returns false when number is 9', () => {
    expect(numberChecker(9)).toEqual(false);
  });
  test.skip('returns false when number is 6', () => {
    expect(numberChecker(6)).toEqual(false);
  });
  test('returns true when number is 10 or greater', () => {
    expect(numberChecker(9)).toEqual(false);
    expect(numberChecker(10)).toEqual(true);
    expect(numberChecker(1000)).toEqual(true);
  });
});
