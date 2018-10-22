// math 
const num1 = 100;
const num2 = 50;

let val;
val = num1 + num2;// 150
val = num1 * num2;//5000
val = num1 - num2;//50
val = num1 / num2;//2
val = num1 % num2;// 0 modulo


//Math object
val = Math.PI;// 3.14
val = Math.round(2.8)//3
val = Math.round(2.4)//2
val = Math.ceil(2.4);// round up to 3
val = Math.floor(2.8);// round down to 2
val = Math.sqrt(64);// square root is 8
val = Math.pow(8, 2); // 64 - first valus is number second value is power
val = Math.min(1, 2,45,6,34.25); // 1
val = Math.max(1, 2,45,6,34.25); // 45
val = Math.random(); // nubmer between 0 and 1 - 0.232334324234
val = Math.random() * 10 + 1; // random number between 0 and 9 and then adding 1 to be  0-10. ex 5.3423523523523. For interger number use
val = Math.floor(Math.random() * 10 + 1); // an interger number between 0 and 10

console.log(val);