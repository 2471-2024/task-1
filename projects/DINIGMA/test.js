const {daysToNewYear} = require('.')

const testOne = new Date('2024-10-16')
const testSecond = new Date('2024-12-31')
const testThird = new Date('2024-01-01')


console.log(daysToNewYear(testOne) === 77 ? "successfully" : "failed");
console.log(daysToNewYear(testSecond)=== 1 ? "successfully" : "failed");
console.log(daysToNewYear(testThird) === 366 ? "successfully" : "failed");

