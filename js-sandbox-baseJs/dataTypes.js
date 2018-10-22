/* data types - a)primitive data types and b)reference data types
a) string, number, boolean, null, undefined, symbols(es6)
b) not primitive - arrays, object literals, functions, dates, anything else...
*/

// PRIMITITVE
// strings
const name = 'petre bogdan';
console.log(typeof name);
//number
const number = 4;
console.log(typeof number + ' ' + number);
//boolean
const hasKids = true;
console.log(typeof hasKids);
//null
const car = null;
console.log(typeof car); // it logs object but checkit on google because is kind of a bug
// undefined
let test;
console.log(typeof test);
// symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPE -  objects
// arrays
const arrayTest = [1,2,3,4];
console.log(typeof arrayTest);
const adresa = {
  stada: 'Al. Baiut',
  numar: 11,
  apt: 22
}
console.log(typeof adresa);

const today = new Date();
console.log(today);
console.log(typeof today);

