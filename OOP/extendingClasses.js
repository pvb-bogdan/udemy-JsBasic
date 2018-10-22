// extending classes and inheritance - subClasses

class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `hello ${this.lastName} ${this.firstName}`;
  }
}

// create a sub class that inherit class Person propreties and add it's one - sub class

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // call Person constructor whit super() whit the same attribute as te class we call - in this case Person
    super(firstName, lastName);
    // then we add what we want to this class
    this.phone = phone;
    this.membership = membership;
  }

  static getMemebershipCost(){
    return 500;
  }
}

// instaciate  an obj call whatever whit the class Person

const bogdan = new Customer('Petre', 'Bogdan', '0723-390-457', 'Gold');

// console.log(bogdan);

// we will call greeting from Person because we extended it whit Costumer but we cannot call Person.getMembershipCost()
console.log(bogdan.greeting());
console.log(Customer.getMemebershipCost());
