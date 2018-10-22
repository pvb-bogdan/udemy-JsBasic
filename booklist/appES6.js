class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
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

  showAlerts(message, className){
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

  deleteBook(target){
    if(target.className = 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

}

// local storage class

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBook() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      // instanciate a new UI obj
      const ui = new UI();
      // add book to list
      ui.addBookToList(book);
    });
  }

  static addBookLS(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if(book.isbn === isbn){
        books.splice(index,1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM load event - we need to verify the dom and llisten to add book from LS

document.addEventListener("DOMContentLoaded", Store.displayBook);

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

      // add book to LS
      Store.addBookLS(book);

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

  // remove book from LS
  // in the params of removeBook we look for uniqe el that will be targeted to be remove - in this case is isbn content
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show remove book alert
  ui.showAlerts('You\'ve just removed a book', 'remove');

  e.preventDefault();
});