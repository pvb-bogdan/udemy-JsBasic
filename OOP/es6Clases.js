// Classes
class Person {
  // create an constructor useing constrictor function
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `salut ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diferenta = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diferenta);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  // static method - useing static word to define it
  static addNumbers(x,y){
    return x + y;
  }
}

// instanciate firs obj

const monica = new Person('Monica', 'Petre', '10-12-2002');

// console.log(monica);

// console.log(monica.calculateAge());

monica.getsMarried('Petrescu');
console.log(monica.greeting());


// Static methods is a method that you don't need specific in this obj propretis, but stand alone method
// we cannot use it like those other methods -greeting or calculateAge because monica.addNumber() does not work so ...

console.log(Person.addNumbers(2,2));
