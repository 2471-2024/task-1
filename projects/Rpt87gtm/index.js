function daysToNewYear(date) {
    var currentYear = date.getFullYear();
    var newYear = new Date(currentYear + 1, 0, 1);
    var timeDiff = newYear - date;
    var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}
module.exports = daysToNewYear;
console.log(`До нового года осталось ${daysToNewYear(new Date())} дней.`);