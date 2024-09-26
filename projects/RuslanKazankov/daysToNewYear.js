module.exports = days;

function days(date){
    let nextYear = date.getFullYear() + 1;
    let newYear = new Date(nextYear, 0, 1);

    let diffInMilliseconds = newYear - date;

    let diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
}