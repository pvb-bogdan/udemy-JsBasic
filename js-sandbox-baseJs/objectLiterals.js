//Object literals
const person = {
  firsName: 'Bogdan',
  lastName:'Petre',
  age: 46,
  hobbyes:['sport','music'],
  addres:{
    city:'Bucuresti',
    sector: 6
  },
  birthYear: function(){
    let date = new Date();// get the full date
    let year = date.getFullYear();// extract only the year
    return year - this.age;
  }
}

let val;

val = person.firsName;// Bogdan
val = person.firsName + " " + person.lastName;// Bogdan Petre
// another sintax
// val = person['firsName']; // Bogdan - works but not usual
val = person.hobbyes[1];// by adding[1] we access second item in the array
val = person.addres.city// Bucuresti
val = person.birthYear();// 1972

console.log(val);

// arrays of objects
const people = [
  {name:'John',age:30},
  {name:'Titi',age:40},
  {name:'Ana',age:20}
];

for(let i = 0; i < people.length; i++){
  console.log('Nume: ' + people[i].name + '\n' +'age: ' + people[i].age);
}



