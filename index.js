import BookCollect from './modules/bookcollect.js';
import { showList, showForm, showContact } from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

const BookCollection = new BookCollect();
const localData = JSON.parse(localStorage.getItem('Books'));
const BookListContainer = document.querySelector('.books-container');

if (localData != null) {
  localData.forEach((item) => {
    BookListContainer.innerHTML += `
      <li class='books-list'>
        <div>"${item.name}" by ${item.author}</div>
        <button class='btn-remove'>Remove</button>
      </li>
    `;
    const book = {
      name: item.name,
      author: item.author,
    };
    BookCollection.books.push(book);
  });
}

const btnSubmit = document.querySelector('.add-book');
const btnRemove = document.querySelectorAll('.btn-remove');
const BookName = document.querySelector('.name');
const BookAuthor = document.querySelector('.author');

btnSubmit.addEventListener('click', () => {
  BookCollection.addBook(BookName.value, BookAuthor.value);
});

btnRemove.forEach((item, index) => {
  item.addEventListener('click', () => {
    BookCollection.removeBook(index);
  });
});

const now = DateTime.now();
const formatted = now.toLocaleString(DateTime.DATETIME_FULL);

const date = document.getElementById('date');
const listBtn = document.querySelector('.list-btn');
const addNewBtn = document.querySelector('.add-btn');
const contactBtn = document.querySelector('.contact-btn');

window.addEventListener('load', () => {
  date.textContent = formatted;
  showList();
});

listBtn.addEventListener('click', () => {
  showList();
});

addNewBtn.addEventListener('click', () => {
  showForm();
});

contactBtn.addEventListener('click', () => {
  showContact();
});