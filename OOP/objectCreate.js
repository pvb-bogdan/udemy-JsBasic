// create obj whit Object.create()

// one sintax to create an obj
const personPrototype = {
  greeting: function(){
    return `Salut ${this.firstName} ${this.lastName}`;
  }, 
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

// instantiate an obj

const monica = Object.create(personPrototype);
      monica.firstName = 'Monica';
      monica.lastName = 'Savin';
      monica.age = 30;


console.log(monica.greeting());     

monica.getsMarried('Petre');      

console.log(monica.greeting());     


// another sintax to create an obj

const bogdan = Object.create(personPrototype, {
  firstName: {value: 'Bogdan'},
  lastName: {value: 'Petre'},
  age: {value: 45}
});

console.log(bogdan);
console.log(bogdan.greeting());