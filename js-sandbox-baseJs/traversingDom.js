// Traversing DOM

let val;

const list = document.querySelector('ul.collection'); 
const listItem = document.querySelector('li.collection-item:first-child'); // because is querySelector it will select first li - :first-child is to see //that

// val = list;
// val = listItem;

// get child nodes

val = list.childNodes; // all types of nodes -even break line or comments, evertihing
val = list.childNodes[0];//#text - first breack node
val = list.childNodes[0].nodeName;//#text
val = list.childNodes[0].nodeType;// 3

// Type of elements - because we get number we see below which number is which
// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children element nodes
val = list.children;// return only elements
val = list.children[1];
val = list.children[1].textContent='Helloo1';

// get childern of children

val = list.children[3].children; // children of children
val = list.children[3].children[0];
val = list.children[3].children[0].style='color:red;';
val = list.children[3].children[0].id='test-id';

// get first child

val = list.firstChild;// first node - #text
val = list.firstElementChild;// first element

//get last child

val = list.lastChild;// first node - #text
val = list.lastElementChild;// first element

// get the count

val = list.childElementCount;// count - case -5

// GET PARENT NODE

val = listItem.parentNode;// ul
val = listItem.parentElement;//ul
val = listItem.parentElement.parentElement;

// GET SIBLINGS
// next sibling
val = listItem.nextSibling;// #text node - all types of nodes
val = listItem.nextElementSibling.nextElementSibling;
//previous sibling
val = listItem.previousSibling;// #text node - all types of nodes
val = listItem.previousElementSibling;

console.log(val);
