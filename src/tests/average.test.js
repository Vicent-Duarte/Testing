const average = require('../functions/average.functions');

test('Average should return 5', () => {
    expect(average(4, 5, 6)).toBe(5)
})
    test('Average should return 15', () => {
    expect(average(10, 15, 20)).toBe(15)
})