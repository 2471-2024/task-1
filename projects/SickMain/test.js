const daysToNY = require('./daysToNY');

const testCases = [
    { date: new Date(2023, 11, 31), expected: 1 }, 
    { date: new Date(2023, 0, 1), expected: 365 }, 
    { date: new Date(2022, 8, 26), expected: 97 } 
];

testCases.forEach((testCase, index) => {
    const result = daysToNY(testCase.date);
    if (result === testCase.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${testCase.expected}, получено ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${testCase.expected}, получено ${result}`);
    }
});