const daysToNewYear = require('./yearsCount');

const testCases = [
    { date: new Date(2023, 11, 31), expected: 1 }, 
    { date: new Date(2024, 0, 1), expected: 365 }, 
    { date: new Date(2024, 08, 26), expected: 96 } 
];

testCases.forEach((testCase, index) => {
    const result = daysToNewYear(testCase.date);
    if (result === testCase.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${testCase.expected}, получено ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${testCase.expected}, получено ${result}`);
    }
});