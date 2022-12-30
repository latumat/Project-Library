const library = document.querySelector(".container");
const add = document.querySelector(".add-book");
const naruto = new Book("Naruto", "Masashi Kishimoto", "150", true);
const bleach = new Book("Bleach", "Tite Kubo", "200");
const onePiece = new Book("One Piece", "Eiichirō Oda", "500");
const myLibrary = [naruto, bleach, onePiece];
let removes = document.querySelectorAll(".remove");
let rStatus = document.querySelectorAll(".read-status");

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function display() {
  library.innerHTML = "";
  let i = 0;
  let j = 0;
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    const pName = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const remove = document.createElement("button");
    const readStatus = document.createElement("button");
    pName.innerHTML = book.title;
    pAuthor.innerHTML = `Author: ${book.author}`;
    pPages.innerHTML = `Pages: ${book.pages}`;
    remove.innerHTML = "Remove";
    if (book.read) {
      readStatus.innerHTML = "Read";
      readStatus.classList = "read";
    } else {
      readStatus.innerHTML = "Not read";
    }
    remove.classList = "remove";
    pName.classList = "title";
    readStatus.setAttribute("id", `${i}rs`);
    readStatus.classList.add("read-status");
    div.appendChild(pName);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(remove);
    div.appendChild(readStatus);
    div.classList = "book";
    div.setAttribute("id", `${i}b`);
    remove.setAttribute("id", j);
    library.appendChild(div);
    i++;
    j++;
  });
  removes = document.querySelectorAll(".remove");
  rStatus = document.querySelectorAll(".read-status");
  removeBook();
  changeStatus();
}

function addBook() {
  add.addEventListener("click", () => {
    const newName = document.getElementById("name");
    const newAuthor = document.getElementById("author");
    const newPages = document.getElementById("pages");
    const newBook = new Book(newName.value, newAuthor.value, newPages.value);
    myLibrary.push(newBook);
    rStatus = document.querySelectorAll(".read-status");
    display();
  });
}

function removeBook() {
  removes.forEach((e) => {
    e.addEventListener("click", () => {
      const bookIndex = e.getAttribute("id");
      myLibrary.splice(bookIndex, 1);
      display();
    });
  });
}

function changeStatus() {
  rStatus.forEach((e) => {
    e.addEventListener("click", () => {
      const readIndex = e.getAttribute("id")[0];
      if (myLibrary[readIndex].read) {
        myLibrary[readIndex].read = false;
        e.classList.remove("read");
        e.innerHTML = "Not read";
      } else {
        myLibrary[readIndex].read = true;
        e.classList.add("read");
        e.innerHTML = "Read";
      }
    });
  });
}

function runLibrary() {
  display();
  addBook();
}

runLibrary();
