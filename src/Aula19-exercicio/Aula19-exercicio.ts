import validator from 'validator';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  hideErrorMessages(form);
  checkForEmptyField(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(form)) console.log('FORMULÁRIO ENVIADO');
});

function checkEmail(input: HTMLInputElement): void {
  if (!validator.isEmail(input.value))
    showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(
  password1: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password1.value !== password2.value) {
    showErrorMessage(password1, 'Senhas não batem');
    showErrorMessage(password2, 'Senhas não batem');
  }
}

function checkForEmptyField(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}
