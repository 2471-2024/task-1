import { daysUntilNewYear } from "./index.js";
var fstDate = new Date();
fstDate.setFullYear(2021);fstDate.setMonth(0);fstDate.setDate(1);
var secDate = new Date();
secDate.setFullYear(2021);secDate.setMonth(11);secDate.setDate(31);
var thdDate = new Date();
thdDate.setFullYear(2024);thdDate.setMonth(0);thdDate.setDate(1);
var check=0;
if(daysUntilNewYear(fstDate)===364)check++;
if(daysUntilNewYear(secDate)===0)check++;
if(daysUntilNewYear(thdDate)===365)check++;
console.log(check+"/3")
