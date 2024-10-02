const daysToNewYear = require('./datesCount');

const testCases = [
    { date: new Date(2023, 11, 31), expected: 1 }, 
    { date: new Date(2024, 0, 1), expected: 365 }, 
    { date: new Date(2024, 9, 22), expected: 70 } 
];

testCases.forEach((testCase, index) => {
    const result = daysToNewYear(testCase.date);
    if (result === testCase.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${testCase.expected}, получено ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${testCase.expected}, получено ${result}`);
    }
});