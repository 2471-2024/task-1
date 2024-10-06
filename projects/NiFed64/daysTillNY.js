function daysUntilNewYear(date) {
    const year = date.getFullYear();
    const nextNewYear = new Date(year + 1, 0, 1); // 1 января следующего года

    // Вычисляем количество миллисекунд между переданной датой и Новым годом
    const diffInMilliseconds = nextNewYear - date;

    // Преобразуем миллисекунды в дни
    const daysUntilNewYear = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    
    return daysUntilNewYear;
}

module.exports = { daysUntilNewYear };
