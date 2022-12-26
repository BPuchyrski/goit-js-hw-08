let throttle = require('lodash.throttle');
let form = document.querySelector('.feedback-form');
let mail = form.querySelector('input');
let textArea = form.querySelector('textarea');

let toLocalStorage = () => {
  let store = {
    email: mail.value,
    message: textArea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(store));
};

form.addEventListener('input', throttle(toLocalStorage, 500));

let storedOutput = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state') === null) {
  inputEmail.value = '';
  inputText.value = '';
} else {
  mail.value = storedOutput.email;
  textArea.value = storedOutput.message;
}
