const temp = require('../functions/temp.functions')

test('Temp should return 68 F', () => {
    expect(temp(20)).toBe(68)
})