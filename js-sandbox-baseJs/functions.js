// function declaration , function expresion, 

// FUNCtION DECLARATIONS

function greet(firstName = 'Bogdan',lastName = "Petre"){
  // firstName and lastName are called parameters(params) or arguments
  // when we call function we pass params to it
  // if we dont have params passed to function callback it well be undefined in console so we do an if statement 
  // where we check typeof of params and if undefined we pass a default
  // ex: if(firstName === 'undefined'){firstName === 'Ion'} (es5 and back) - (es6) is above
  // here is the function scope
  return 'hello ' + firstName +' '+ lastName;
}
// console.log(greet('Stan','Bogdan'));

// FUNCTION EXPRESIONS

const square = function(x = 2){
  return x*x
};

// console.log(square(7));

//IMMIDIATLEY INVOKABLE FUNCTIONS EXPRESIONS - IIFEs
// a function that we declare and run in the same time

// (function(){
//   console.log('it works');
// })();


//whit params

// (function(name = 'Bogdan'){
//   console.log(`This is ${name}`);
// })('Petre');

//PROPRETY METHODS
// when a function is inside an object it's callled a method

const todo = {
  add:function(){
    console.log('add todo');
  },
  edit:function(id){
    console.log(`Edit this id - ${id}`);
  }
}

todo.delete = function(){
  console.log('delete todo');
}

todo.add();
todo.edit(34);
todo.delete();