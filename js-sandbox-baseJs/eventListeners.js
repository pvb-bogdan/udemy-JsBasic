// Event listeners

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('hello');

//   e.preventDefault();// because every el have a default behavior we call preventdefaut
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){

  let val;
  val = e;

  // event target el

  val = e.target;
  val = e.target.className;
  val = e.target.classList;
  val = e.target.innerText = 'Ai Adugat';

  // event type

  val = e.type;

  // timestamp

  val = e.timeStamp;

  // Coordonates on page relative to window

  val = e.clientY;
  val = e.clientX;

  // coord relative to element

  val = e.offsetY;
  val = e.offsetX;


  console.log(val);
};