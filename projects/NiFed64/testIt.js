// testIt.js

const { daysUntilNewYear } = require('./daysTillNY');

// Тест 1: 25 января
const testDate1 = new Date('2024-12-25');
if (daysUntilNewYear(testDate1) === 7) {
    console.log('Тест 1 пройден');
} else {
    console.log('Тест 1 не пройден');
}

// Тест 2: 1 января
const testDate2 = new Date('2024-01-01');
if (daysUntilNewYear(testDate2) === 366) {
    console.log('Тест 2 пройден');
} else {
    console.log('Тест 2 не пройден');
}

// Тест 3: 31 декабря
const testDate3 = new Date('2024-12-31');
if (daysUntilNewYear(testDate3) === 1) {
    console.log('Тест 3 пройден');
} else {
    console.log('Тест 3 не пройден');
}
