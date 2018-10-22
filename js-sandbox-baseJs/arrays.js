// create arrays
const numbers = [43,45,21,65,2,33,21];
const numbers2 = new Array(11,2,34,35,65,22,16);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [23,'hello',true,undefined,null,{a:1,b:1},new Date()];
const test = 'test';
let val;

// get array length
val = numbers.length;//7
//check if is array
val = Array.isArray(numbers);// true
//Get a single value from array
val = numbers[3]// 65
val = numbers[0]//43
//insert into array
// numbers[2] = 120; // insert 120 at pos 2 in numbers array
//find index of value
val = numbers.indexOf(45);// index 1

//MUTATING ARRAYS
// push(add to end) into array
// val = numbers.push(1212);
// // add to front
// numbers.unshift(212);
// //remove from end
// numbers.pop();
// //remove from front
// numbers.shift();
// //splice values
// numbers.splice(2,4);// first argument is where we start to remove, second is where we stop
// reverse array
// numbers.reverse();

//Concatenate array
// val = numbers.concat(numbers2);
//sorting array
val = fruit.sort();// sort array alphabetically - does not work with numbers(number will be sorted by index - 0 to whatever)
// val = numbers.sort();
// use the compare function to sort numbers from small to large
// val = numbers.sort(function(x,y){
//   return x - y;
// });
// // reverse sorting
// val = numbers.sort(function(x,y){
//   return y -x;
// });
// find() - find first number under 33 /  could do first over some number 
function under33(num){
  return num < 33;
}
 val = numbers.find(under33);

 function over45(num){
  return num > 45;
}
 val = numbers.find(over45);


console.log(numbers);
console.log(val);

