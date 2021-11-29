const buttonBtn = document.querySelector('#buttonBtn');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

buttonBtn.addEventListener('click', (e) => {
  if (validate() !== 'valid') {
    e.preventDefault();
  }
});

function validate() {

  if (firstNameInput.value === '') {
    firstNameInput.classList.add('error')
  } else {
    firstNameInput.classList.remove('error')
  }
  if (lastNameInput.value === '') {
    lastNameInput.classList.add('error')
  } else {
    lastNameInput.classList.remove('error')
  }
  if (passwordInput.value === '') {
    passwordInput.classList.add('error')
  } else {
    passwordInput.classList.remove('error')
  }

  const invalidEmail = (
    emailInput.value === ''
    || emailInput.value.indexOf('@') === -1
    || emailInput.value.indexOf('.') === -1
    || (emailInput.value.indexOf('.') - emailInput.value.indexOf('@')) === 1
  );

  if (invalidEmail) {
    emailInput.classList.add('error');
    return 'invalid';
  } else {
    emailInput.classList.remove('error');
    return 'valid';
  }
}