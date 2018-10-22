// LOCAL STORAGE - will stay until we erase
// window > local storage in console
// in local storege we need  to transform all in array
// localStorage.setItem("name", "Bogdan");
// localStorage.setItem("age", "40"); // add name Bogdan

// remove item from local
// localStorage.removeItem("name");

// SESION STORAGE - will stay until the browser is close
// sessionStorage.setItem("name", "petre");
// sessionStorage.removeItem("name");

// get from storage
// const nameLocal = localStorage.getItem("name");
// const ageLocal = localStorage.getItem("age");

// clear local storage
// localStorage.clear();
// console.log(nameLocal, ageLocal);

let select = document.querySelector('form');
// console.log(select);

select.addEventListener('submit', function(e){
  const todo = document.getElementById('task').value;

  // in local storage we can storage one  item at the time so if we writte another item it will substitute the one allready in
  // so we can make an array of strings by use of JSON
  // initialize a variable to work whit

  let todos;

  // check if we have something into a localStorage
  if(localStorage.getItem('todos') === null){
    todos = [];
    } else{
    todos = JSON.parse(localStorage.getItem('todos'));// whitout json.parse it will be an array
  } 

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));

  alert(' it\'s done!');
  e.preventDefault();
});

const todos = JSON.parse(localStorage.getItem('todos'));

todos.forEach(function(todo){
  console.log(todo);
})
// const todos = localStorage.getItem(todos);
// document.querySelector('form').addEvenListener('submit', function(e) {
//   const sarcina = document.getElementById('task').value;

//   localStorage.setItem('task', sarcina);
//   alert(sarcina);

//   e.preventDefault();
// });
