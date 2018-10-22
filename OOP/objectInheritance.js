// prototype inheritance

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// make a method greeting
Person.prototype.greeting = function(){
  return `Salut ${this.firstName} !`;
}

const person1 = new Person('Bogdan', 'Petre');

console.log(person1.greeting());

// create a Customer constructor that will inherit firstNmae and lastName from Person

function Customer(firstName, lastName, phone, membership){
  // to inherit the propretis from Person we call Person whit fucntion call()
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// make Customer inherit the person prototype methods - 
Customer.prototype = Object.create(Person.prototype);

//Make Customer.prototype return custumer
Customer.prototype.constructor = Customer;

const costumer1 = new Customer('Monica', 'Petre', '777-777-7777', 'Gold');


console.log(costumer1);
console.log(costumer1.greeting());

// right now the customer1 does not inherit the method greeting() - so we will do that on line 26
// if we want to create a separate greeding for Customer 

Customer.prototype.greeting = function(){
  return `Salut ${this.firstName} ${this.lastName}, bine ai venit!`;
}

console.log(costumer1.greeting());