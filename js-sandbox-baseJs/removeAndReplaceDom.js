// replace/remove elements
//REPLACE

// create an el

const newHeading  = document.createElement('h3');
//add id
newHeading.id = 'task-title';
// new text node for this h3
newHeading.appendChild(document.createTextNode('New List'));
// get the old heading
const oldHeading = document.getElementById('task-title');
//parent to replace child
const cardAction = document.querySelector('.card-action');
// replace now
cardAction.replaceChild(newHeading, oldHeading);// frist argument is what we put in place(newH), and second arg is what we remove(oldHe)

// Remove el

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list element
lis[0].remove();// remove first el
// remove by child
list.removeChild(lis[3]);

// classes and atributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');// add class
link.classList.remove('test');// remove class
val = link;

//Atributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://petrebogdan.com');
val = link.hasAttribute('href');// true
// link.removeAttribute('href');

val = link;

console.log(val);

