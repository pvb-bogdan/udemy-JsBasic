// DEFINE OUR UI VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// call a function that will listen on all events 
loadEventListeres();

// create function that will listen on all events 

function loadEventListeres(){

  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  // remove task event
  taskList.addEventListener('click', removeTask);

  // clear task btn
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filter.addEventListener('keyup', filterTasks);

}
// get Tasks from LS

function getTasks (){
  let tasks;
  // check local storage if it is somethin in and ste it to an array
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }// add tasks to local storage and parse it with JSON
    else {
      // tasks will transform into an array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(
    function(task){
    // now we create a list item to add to our list if the taskInput.value has content
    // creat li el
    const li = document.createElement('li');
    li.className = 'collection-item';

    // create textNode and appedn to li
    li.appendChild(document.createTextNode(task));

      // create new link el
    const link = document.createElement('a');
    // add clas to a tag
    link.className = 'delete-item secondary-content';
    // add teh icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    // append li to the ul
    taskList.appendChild(li);

    }
  )
}



//Add task

function addTask(e){
  // check if we have something in input
  if(taskInput.value === ''){
    alert('please add something!');
    // return null;// just to not ass another list item
  } else {
    // now we create a list item to add to our list if the taskInput.value has content
    // creat li el
    const li = document.createElement('li');
    li.className = 'collection-item';

    // create textNode and appedn to li
    li.appendChild(document.createTextNode(taskInput.value));

      // create new link el
    const link = document.createElement('a');
    // add clas to a tag
    link.className = 'delete-item secondary-content';
    // add teh icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);

    // append li to the ul
    taskList.appendChild(li);

    // call f Store in Local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear the input
    taskInput.value = '';
  }
  e.preventDefault(); // because it is a submit event
}

// function store inLS
function storeTaskInLocalStorage(task){
  let tasks;
  // check local storage if it is somethin in and ste it to an array
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }// add tasks to local storage and parse it with JSON
    else {
      // tasks will transform into an array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  // tasks transorm again into a string to be loaded in LS = it must be a string
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
// remove task function

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('esti sigur ca vrei sa stergi?')){
      e.target.parentElement.parentElement.remove();

      // remove from LS
      removeTasksFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// Remove from Local Storage
function removeTasksFromLocalStorage(taskItem){
  let tasks;
  // check local storage if it is somethin in and ste it to an array
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }// add tasks to local storage and parse it with JSON
    else {
      // tasks will transform into an array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// clear tasks

function clearTasks(e){
  // delete all html in list
  // taskList.innerHTML = ' ';
  if(confirm('Are you sure to delete all items?')){
     // faster way in browser
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  // clear from LS
  clearTasksFromLocalStorage();
}
// clear from LS
function clearTasksFromLocalStorage(){
  localStorage.clear();
}
// filter tasks

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  //querySelectorAll return a nodeList so we can loop trough it like an array, othrwise we should transform to an array to use forech
  document.querySelectorAll('.collection-item').forEach(function(i){
    const item = i.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      i.style.display = 'block';
    }else{
      i.style.display = 'none';
    }
  });
}