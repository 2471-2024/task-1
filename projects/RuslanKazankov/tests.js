const daysLeft = require('./daysToNewYear');

console.log(daysLeft(new Date(2024, 14, 5)));
console.log(daysLeft(new Date(2001, 30, 7)));
console.log(daysLeft(new Date(2010, 3, 3)));

if(302 == daysLeft(new Date(2024, 14, 5))){
    console.log("test 2024.14.05 " + true);
}else console.log("test 2024.14.05 " + false);
if(179 == daysLeft(new Date(2001, 30, 7))){
    console.log("test 2024.30.07 " + true);
}else console.log("test 2024.30.07 " + false);
if(274 == daysLeft(new Date(2010, 3, 3))){
    console.log("test 2024.03.03 " + true);
}else console.log("test 2024.03.03 " + false);