const firstName = "Bogdan";
const lastName = "Petre";
const str = 'Salut numele meu este Bogdan';
const tags = "web design, web development, programming";

let val;

// concatenation
val = firstName + lastName;// BogdanPetre
val = firstName + ' ' + lastName; // Bogdan Petre
//append
val = "titi ";
val += "aur"; // titi aur - append aur at titi +=sign means append at
//escaping
val = 'that\'s awesome, I can\'t wait'; // use double quotes to escape single one or - best practice -  use backslash \
// PROPRETIES AND METHOSD THAT WORK WITH STRINGS
//length
val = firstName.length;// 6
// concat()
val = firstName.concat(' ', lastName); //Bogdan Petre
// chhange Case
val = firstName.toUpperCase(); //BOGDAN
val = firstName.toLowerCase(); // bogdan
// indexOf()
val = firstName.indexOf('d'); // 3 - b=0, o=1,g=2,d=3,a=4,n=5
val =firstName.lastIndexOf('d'); //3
//charAt()
val = firstName.charAt('2'); // g
// get last character
val = firstName.charAt(firstName.length - 1);// n
//substring()
val = firstName.substring(3,6);// dan
//slice()
val = firstName.slice(2,4);// gdan - slice from index given on - can use negative numbers
//split()
val = str.split(' ');// (5)["Salut","numele","meu","este","Bogdan"] split all the words by space
val = tags.split(',');// (3) ["web design","web development","programming"] split by carmma
//replace()
val = firstName.replace('Bogdan', 'Dan') + ' ' + lastName; // Dan Petre - replace Bogdan with Dan
val = str.replace('Bogdan','Dan'); //  Salut numele meu este Dan
//includes() -the way to check if something are inside of a string
val = str.includes('Salut')// true - este in string
val = str.includes('foo'); // false



console.log(val);