// al objects inherit from prototype
// first Object.prototype
//Person.prototype

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calcAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
  // making a method in constructor itself when this method will be need it on every instance of a obj contructor does not make senese because of a prototype inheritance
}


//Calculate age in prototype
// make the method in Object.protoype 

Person.prototype.calcAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// make another method to change a key valu from obj

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// change last name

Person.prototype.getNameChanged = function(newLastName){
  return this.lastName = newLastName;
}

const bogdan = new Person('bogdan', 'petre', 'November 22 1972');
const monica = new Person('monica', 'savin', '08-27-1976');

console.log(bogdan);

console.log(bogdan.calcAge());

console.log(monica.getFullName());

console.log(monica.getNameChanged('Petre'));
console.log(monica.getFullName());

// check property from object to see if our obj have property

console.log(monica.hasOwnProperty('lastName'));// true
console.log(monica.hasOwnProperty('house'));//false