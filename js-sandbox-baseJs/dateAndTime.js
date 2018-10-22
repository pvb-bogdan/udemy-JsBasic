const today = new Date();
let birthday = new Date('22-11-1972 05:35:00');

let val;
val = today;

//https://developer.mozilla.org/bm/docs/Web/JavaScript

// get dates - see js mdn for more.
val = today.getMonth() + 1; // array in base 0 so month starts January = 0 and so on
val = today.getDate();// day of the month
val = today.getDay()// day of the month - numeric
val = today.getFullYear();

// set dates - see JS MDN
birthday = new Date('November 2 1972');
birthday.setMonth(2); 
birthday.setDate(12);


// console.log(val);
console.log(birthday);



// var dayNames = new Array("Duminica","Luni","Marti","Miercuri","Joi","Vineri si un weekend placut","Sambata");
// 							var now = new Date();
// 							document.write("Te mai astept!<br/>Iti doresc o zi de " + dayNames[now.getDay()] + " fericita.");
// console.log(dayNames[3]);