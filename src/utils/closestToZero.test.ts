import closestToZero from '../../src/utils/closestToZero'

test('test closestToZero method with [8, 5, 10], result must be 5', () => {
    expect(closestToZero([8, 5, 10])).toBe(5);
});

test('test closestToZero method with [5, 4, -9, 6, -10, -1, 8], result must be -1', () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
});

test('test closestToZero method with [8, 2, 3, -2], result must be 2', () => {
    expect(closestToZero([8, 2, 3, -2])).toBe(2);
});

test('test closestToZero method with [2, 0], result must be 0', () => {
    expect(closestToZero([2, 0])).toBe(0);
});

test('test closestToZero method with [], result must be 0', () => {
    expect(closestToZero([])).toBe(0);
});

test('test closestToZero method with undefined, result must be 0', () => {
    expect(closestToZero(undefined)).toBe(0);
});