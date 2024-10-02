const {getTimeDiff } = require('../src/datesCount');



const testCases = [
    { start: new Date(2023, 10, 1), end: new Date(2023, 12, 4), expected: '64 дней' },
    { start: new Date(2023, 10, 1, 23), end: new Date(2023, 10, 2, 1), expected: '2 часов' },
    { start: new Date(2023, 10, 1, 23, 59), end: new Date(2023, 12, 2, 5, 1), expected: '61 дней 5 часов 2 минут' },
    { start: new Date(2023, 10, 1, 23, 59, 59), end: new Date(2023, 10, 2, 6, 0, 1), expected: '6 часов 2 секунд' }
];

testCases.forEach((testCase, index) => {
    const result = getTimeDiff(testCase.start, testCase.end);
    if (result === testCase.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${testCase.expected}, получено ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${testCase.expected}, получено ${result}`);
    }
});