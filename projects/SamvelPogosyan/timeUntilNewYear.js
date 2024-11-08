function timeUntilNewYear(date) {
    // Проверяем, является ли дата 1 января
    if (date.getMonth() === 0 && date.getDate() === 1) {
        return 0; // Если дата 1 января, возвращаем 0
    }
    const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
    const daysUntilNewYear = Math.ceil((nextNewYear - date) / (1000 * 60 * 60 * 24));
    return daysUntilNewYear;
}
module.exports = timeUntilNewYear;
