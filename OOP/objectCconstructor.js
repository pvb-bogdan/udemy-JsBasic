//object literal

// const objLiteral = {
//   name: 'Bogdan',
//   age: 40
// }

// console.log(objLiteral.name);
//this refer to scope - if it is in a function then refers to that function, if is in global scope then refers to window obj - just try whit console.log
//Constructor object - constructor name should start whti capital letter

function Person(name, dob){
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // create a method = a function into a object
  // scope of this
  // console.log(this); instances of Person - dudud and lili
}
 // scope of this is global = window
 // console.log(this);

// create another instance of a object Person
// const dudu = new Person('Dudu', 40);
// const lili = new Person('Lili', 45);

// console.log(dudu.name, lili.age);

const bogdan = new Person('bogdan', '11-22-1972');
console.log(bogdan.calcAge());
