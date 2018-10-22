// Book constructor

function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor -- all methods will be in this constructor.prtotype

function UI() {};

// add Book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // create a tr el
  const row = document.createElement('tr');

  //insert cols in tr of table
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td> <a href="#" class="delete">X</a></td>`

  // appent to table
  list.appendChild(row);
  // console.log(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

// create UI show alerts

UI.prototype.showAlerts = function(message, className){
  // create a div
  const div = document.createElement('div');
  // add class to the div - two clases one is alert the scond one will be from validation function
  div.className = `alert ${className}`;
  // add text to div by textNode
  div.appendChild(document.createTextNode(message));
  // insert into the dom - get parent
  const container = document.querySelector('.container');
  // get form
  const form = document.querySelector('#book-form');
  //insert alert befoore form
  container.insertBefore(div, form);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 2500)

}

//delete book
UI.prototype.deleteBook = function(target){
  if(target.className = 'delete'){
    target.parentElement.parentElement.remove();
  }
}

//Event listener add book
// listen on submit on form
document.querySelector('#book-form').addEventListener('submit',
  function(e){
    // get form values
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value

    // instanciate a new book obj
    const book = new Book(title, author,isbn);

    // instanciate a new UI obj
    const ui = new UI();

    // Validate fields form
    if(title === '' || author === '' || isbn === ''){
      // alert field are empty
      ui.showAlerts('Please fill in all fields', 'error');
    } else {
      // add book to list
      ui.addBookToList(book);
      // show added book alert
      ui.showAlerts('You\'ve just added a book', 'succes');
      // clear fields
      ui.clearFields()
    }
    // console.log(book);
    e.preventDefault();
});

// event listener for delete book
// because the element that we need to target is not in the DM, but create dinimicaly, ew need to event delegate and start listener on the parent element

document.querySelector('#book-list').addEventListener('click',
function(e){
  // instanciate the UI obj
  const ui = new UI();

  ui.deleteBook(e.target);

  // show remove book alert
  ui.showAlerts('You\'ve just removed a book', 'remove');

  e.preventDefault();
});

