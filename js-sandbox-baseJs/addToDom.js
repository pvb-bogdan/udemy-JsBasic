// create element
const li = document.createElement('li');

// Add a class/id/ attribute to it
li.className = 'collection-item';
li.id = 'test-id';
li.setAttribute('title','New item');

// create text node and append
// li.appendChild(document.createTextNode('hello world!')) one way or make a variable
let text = document.createTextNode('Hello World!');
li.appendChild(text);

// create new link element

const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content'

// add icon

link.innerHTML = '<i class="fa fa-remove"></i>'

// append link into li

li.appendChild(link);

// append li as a child to ul

document.querySelector('ul.collection').appendChild(li);



console.log(li);