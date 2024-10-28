module.exports = daysToNY;

function daysToNY(date) {
    var newYearDate = new Date(date.getFullYear() + 1, 0, 1);
    return Math.round((newYearDate - date) / (1000 * 60 * 60 * 24));
}
