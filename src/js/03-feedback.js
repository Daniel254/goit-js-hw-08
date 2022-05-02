import throttle from 'lodash.throttle';

const FORM_STATE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const storageFormState = localStorage.getItem(FORM_STATE);

const onLoad = () => {
  if (!storageFormState) {
    return;
  }
  const formState = JSON.parse(storageFormState);
  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
};
const onFormInput = throttle(currentTarget => {
  const formFields = {
    email: currentTarget.elements.email.value,
    message: currentTarget.elements.message.value,
  };
  localStorage.setItem(FORM_STATE, JSON.stringify(formFields));
}, 500);
const onSubmit = e => {
  e.preventDefault();

  console.log({
    email: e.currentTarget.elements.email.value,
    message: e.currentTarget.elements.message.value,
  });

  localStorage.removeItem(FORM_STATE);
  e.target.reset();
};

form.elements.email.setAttribute('required', true);
form.elements.message.setAttribute('required', true);
addEventListener('DOMContentLoaded', onLoad);
form.addEventListener('input', e => onFormInput(e.currentTarget));
form.addEventListener('submit', onSubmit);
