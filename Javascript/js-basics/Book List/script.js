class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>`;
  }
  showAlert(message, className) {
    const div = document.createElement("div");
    //Add classname
    div.className = `alert ${className}`;
    message = document.createTextNode(message);
    const container = document.querySelector(".container");
    //Get Form
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    //set timeout
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Event Listening
const submit = document.querySelector("#submit");
//console.log(submit);
submit.addEventListener("click", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //Instantiate book
  const book = new Book(title, author, isbn);
});
