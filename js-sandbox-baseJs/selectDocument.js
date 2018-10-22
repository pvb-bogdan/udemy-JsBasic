let val;
// select
val = document; // all dcocument
val = document.all;
val = document.all[6];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[1];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts; // retrive script like an array but we can't acces it like an array = forEach is not a function

let scriptsArr = Array.from(scripts); // make a propper array and then loop trough each element of the array

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
})

console.log(val);