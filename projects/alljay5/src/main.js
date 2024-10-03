const {formatTimeDifference } = require('./formatTimeDifference');



console.log(formatTimeDifference(new Date, new Date('2024-12-23T00:00:00')));
console.log(formatTimeDifference(new Date, new Date('2025-01-01T00:00:00')));
console.log(formatTimeDifference(new Date, new Date('2025-05-26T00:00:00')));