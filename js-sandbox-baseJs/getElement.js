//Select elements DOM
// doscument.getElementById()

let val;

val = document.getElementById('main');

// get things from the element

val = document.getElementById('main').className;
console.log(val);

//Change styling
// although we can select element directly it is better to asign to a variable and then use it
let mainDoc = document.getElementById('main');
let taskTitle = document.getElementById('task-title');

mainDoc .style.background = '#f8f8f8';
mainDoc .style.border = '1px solid red';
mainDoc .style.padding = '0 1rem';

//Change content

taskTitle.textContent = 'LISTA PRIORITATI';
taskTitle.innerText = 'ALTE PRIORITATI';
taskTitle.innerHTML = '<span>Task list</span>';

//document.querySelector() - single element selector

// console.log(document.querySelector('#main'));
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));// if there are more than 1 on the page it will get the first one - same on the query above

// document.querySelector('li').style.color = 'red'; // styled only first li

// select one or more element on DOM
//document.getElemntsByClassName

//

// document.getElementsByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red'; 
// lis[3].textContent = 'red'; 

// lis = Array.from(lis); //convert HTML COLLECTION into array

// lis.reverse();
// lis.forEach(function(li, index){
//   console.log(li.className);
//   // li.textContent = "HELLO!"
//   li.textContent = `${index} : Hello`;
// })

// console.log(lis);

// document.querySelectorAll - useing selectorAll we can treat the result as an array becose it return a NodeList and we dont have to 
// convert the result to an array 

const itemsQueryAll = document.querySelectorAll('ul.collection li.collection-item');

itemsQueryAll.forEach(function(item , index){
  item.textContent = `${index} : Hello`;
})


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li , index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style = 'background:red; color:white;';
}
console.log(itemsQueryAll);

