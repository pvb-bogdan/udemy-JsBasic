// Conversion to number or to string

let val;

// number to string
val = String(5);
val = String(4+4);
//boolean to string
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1,2,3,4]);

//toString();
val = (5).toString();
val = (true).toString();

//string to number
val = Number('5');
val = Number(true); // log 1
val = Number(false);// log 0
val = Number(null); // log 0
val = Number('hello'); // log NaN - NaN is a value in js

val = parseInt('100');// parse as an interger
val = parseFloat('100.22'); // parse as a decimals numbers
//output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length); // length is only for strings
// console.log(val.toFixed());

// Js conversion

// const val1 = 5;
// const val2 = 6;
// const sum = val1 +val2;

// console.log(sum); // 11
// console.log(typeof sum);// number
// both vars are number 

const val1 = String(5);
const val2 = 6;
const sum = val1 +val2;

console.log(sum); // 56
console.log(typeof sum);// string
// js changhr both to string and then concatenated them and made them string