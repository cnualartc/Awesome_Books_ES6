const list = document.querySelector('.list');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

export const showList = () => {
  list.classList.remove('hide-list');
  form.classList.add('hide-form');
  contact.classList.add('hide-contact');
};

export const showForm = () => {
  form.classList.remove('hide-form');
  contact.classList.add('hide-contact');
  list.classList.add('hide-list');
};

export const showContact = () => {
  contact.classList.remove('hide-contact');
  list.classList.add('hide-list');
  form.classList.add('hide-form');
};
