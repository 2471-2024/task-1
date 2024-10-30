const timeUntilNewYear = require('./timeUntilNewYear');

function testTimeUntilNewYear() {
    const testCases = [
        { input: new Date('2023-12-31'), expected: 1 },
        { input: new Date('2023-12-30'), expected: 2 },
        { input: new Date('2023-01-01'), expected: 364 },
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = timeUntilNewYear(input);
        if (result !== expected) {
            console.error(`Test case ${index + 1} failed: expected ${expected}, got ${result}`);
        } else {
            console.log(`Test case ${index + 1} passed.`);
        }
    });
}

testTimeUntilNewYear();
