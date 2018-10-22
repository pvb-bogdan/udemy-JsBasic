// Event bubbling - it works from listener up

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('.card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('.card-content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('.card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('.col');
// });

// Event delegation - it works from listener down

// const sterge = document.querySelector('.delete-item');

// sterge.addEventListener('click', stergeLi);

document.body.addEventListener("click", stergeLi);

function stergeLi(e) {
  // console.log('sterge');
  // console.log(e.target);
  //target link by event delegation and traversing the DOM
  // check el for exact class

  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('sterge element');
  // }

  // above it was exact clas, but if we add another class it wont work so we have to do it lik below

  if (e.target.parentElement.classList.contains("delete-item")) {
    // console.log('sterge element cu classlist');
    // make the li disaopear
    e.target.parentElement.parentElement.remove();
    console.log(e.target.parentElement.parentElement);
  }
}

// console.log(sterge);
