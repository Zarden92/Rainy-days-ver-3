const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
subjectInput.addEventListener('input', validateSubject);
messageInput.addEventListener('input', validateMessage);

function validateName() {
  const nameValue = nameInput.value.trim();
  const error = nameInput.nextElementSibling;
  if (!nameValue.includes(' ')) {
    nameInput.classList.add('invalid');
    error.textContent = 'Please enter your firstname and surname.';
  } else {
    nameInput.classList.remove('invalid');
    error.textContent = '';
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const error = emailInput.nextElementSibling;
  if (!emailValue.includes('@')) {
    emailInput.classList.add('invalid');
    error.textContent = 'Please enter a valid email address. (example@domain.com)';
  } else {
    emailInput.classList.remove('invalid');
    error.textContent = '';
  }
}

function validateSubject() {
  const subjectValue = subjectInput.value.trim();
  const error = subjectInput.nextElementSibling;
  if (subjectValue.length < 10) {
    subjectInput.classList.add('invalid');
    error.textContent = 'Subject must be at least 10 characters long.';
  } else {
    subjectInput.classList.remove('invalid');
    error.textContent = '';
  }
}

function validateMessage() {
  const messageValue = messageInput.value.trim();
  const error = messageInput.nextElementSibling;
  const messageWordCount = messageValue.split(' ').length;
  if (messageWordCount > 200) {
    messageInput.classList.add('invalid');
    error.textContent = 'Message must be 200 words or less.';
  } else {
    messageInput.classList.remove('invalid');
    error.textContent = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateName();
  validateEmail();
  validateSubject();
  validateMessage();

  if (!nameInput.classList.contains('invalid') &&
      !emailInput.classList.contains('invalid') &&
      !subjectInput.classList.contains('invalid') &&
      !messageInput.classList.contains('invalid')) {
    form.submit();
  }
});
