export function daysUntilNewYear(now) {
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    if(now.getFullYear%4===0)return (366-day);
    return (365-day);
}
console.log('Days until New Year: '+daysUntilNewYear(new Date()));