// log to console
/*
console.log('heloo world', 1,2,3);// just to bind log to console 
console.log([1,2,'auto']); // log an array
console.log(true);// log a boolean
console.log({a:1,b:2}); //log an object
console.table({a:1,b:2});// log a table with objects
let gretting = "salut";
console.log(gretting); // log a variable
console.error('aici ai o eroare'); // log an error
console.warn('aici ai un avertisment'); // log a warnning
console.time('indetifierHere'); // log start event time
  console.log('heloo world', 1,2,3);// just to bind log to console 
  console.log([1,2,'auto']); // log an array
  console.log(true);// log a boolean
  console.log({a:1,b:2}); //log an object
  console.table({a:1,b:2});// log a table with objects
console.timeEnd('indetifierHere')// log end time event
*/

// variables - var(deprecated), let, const

var name = "John";
console.log(name) // john
//reaasign
name = "Sara"
console.log(name); // Sara

// creat variabel but not assign a value
// Init var

 let salut;
 let a = 2;
 let b = 2;
 let c = a + b;
// console.log(salut);// undefined 
// salut = 'salut';
// console.log(salut); salut

// example using innit var when we don't know the value but give a user a choice

// if( c === 3){
//   salut = 'salut';
//   console.log(salut);
// }else{
//   salut = 'bye bye'
//   console.log(salut);
// }

// rules and conventions - in var/let we can include letters, numbers, _, $ and cannot start with a number
// multi word vars
let firstName = 'jon'; // camel case
let first_name = 'sara';//underscore
let FirstName = 'Tom'; // Pascal case

// CONST - constant -it can be reassigned

const constName = 'Johnny Const';
console.log(constName); // constJohn
// can't reassigned
// name = 'sara';// console log an error - we can reassign a const
// can't initialize without a value
// const salut; // console an error -  Missing initializer in const declaration
// const can't be reassigned but it can be changed if it is an array, object, etc. We can add to it, remove to it but just can't reassign