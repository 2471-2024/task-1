module.exports = daysToNewYear;

function daysToNewYear(date) {
    var currentYear = date.getFullYear();
    var newYear = new Date(currentYear + 1, 0, 1);
    var timeDiff = newYear - date;
    var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

	if (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) {
        daysLeft -= 1; 
    }
    return daysLeft;
}