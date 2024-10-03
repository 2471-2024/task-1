const { daysUntilNewYear } = require('../src/DaysUntilNewYear');


const tests = [
    { date: new Date(2022, 10, 11), expected: 51 }, 
    { date: new Date(2021, 5, 12), expected: 203 }, 
    { date: new Date(2024, 0, 1), expected: 366 }, 
    { date: new Date(2023, 1, 1), expected: 334 }  
];

tests.forEach((i, index) => {
    const result = daysUntilNewYear(i.date);
    if (result === i.expected) {
        console.log(`Тест ${index + 1} пройден: ожидалось ${i.expected}, получено: ${result}`);
    } else {
        console.error(`Тест ${index + 1} не пройден: ожидалось ${i.expected}, получено: ${result}`);
    }
});