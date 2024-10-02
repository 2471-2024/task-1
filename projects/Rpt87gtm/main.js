const { getTimeDifference } = require('./yearsCount');

function main() {
    const now = new Date();
    const sessionDate = new Date('2024-12-23T00:00:00');
    const newYearDate = new Date('2025-01-01T00:00:00');
    const defenseDate = new Date('2025-05-21T00:00:00');

    console.log(`До сессии: ${getTimeDifference(now, sessionDate)}`);
    console.log(`До Нового Года: ${getTimeDifference(now, newYearDate)}`);
    console.log(`До защиты: ${getTimeDifference(now, defenseDate)}`);
}

main();