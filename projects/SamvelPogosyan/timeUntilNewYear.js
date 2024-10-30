function timeUntilNewYear(date) {
    const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
    const daysUntilNewYear = Math.ceil((nextNewYear - date) / (1000 * 60 * 60 * 24));
    return daysUntilNewYear;
}

module.exports = timeUntilNewYear;
