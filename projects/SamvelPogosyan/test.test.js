const timeUntilNewYear = require('./timeUntilNewYear');
describe('timeUntilNewYear', () => {
    test('calculates days until New Year correctly', () => {
        const testCases = [
            { input: new Date('2023-12-31'), expected: 1 },
            { input: new Date('2023-12-30'), expected: 2 },
            { input: new Date('2023-01-01'), expected: 0 }, // Исправлено на 0
        ];
        testCases.forEach(({ input, expected }, index) => {
            const result = timeUntilNewYear(input);
            expect(result).toBe(expected);
        });
    });
});
