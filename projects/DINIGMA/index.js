const daysToNewYear = (date) => {
    const newYear = new Date(date.getFullYear() + 1, 0, 1)
    const daysToNewYear1 = Math.ceil((newYear - date)/(1000* 60 * 60 * 24))
    return daysToNewYear1
}

console.log(daysToNewYear(new Date('2025-07-27')));

module.exports = {daysToNewYear};
