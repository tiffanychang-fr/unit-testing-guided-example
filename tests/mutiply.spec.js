const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply a positive and a negative correctly', () => {
    const result = multiply(6, -2);
    expect(result).toBe(-12);
  });

  test('should return 0 when multiply any number with a 0', () => {
    const result = multiply(3, 0);
    expect(result).toBe(0);
  });
});
