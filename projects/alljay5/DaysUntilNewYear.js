function daysUntilNewYear(date) {
    let today = date;
    let newYear = new Date(today.getFullYear() + 1, 0, 1);

    let diff = newYear - today;

    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
}

module.exports = { daysUntilNewYear };