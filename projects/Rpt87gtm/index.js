function daysToNewYear() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var newYear = new Date(currentYear + 1, 0, 1);
    var timeDiff = newYear - today;
    var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

console.log(`До нового года осталось ${daysToNewYear()} дней.`);