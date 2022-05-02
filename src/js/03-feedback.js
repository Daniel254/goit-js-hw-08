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
const onFormInput = e => {
  const formFields = {
    email: e.currentTarget.elements.email.value,
    message: e.currentTarget.elements.message.value,
  };
  localStorage.setItem(FORM_STATE, JSON.stringify(formFields));
};

const onSubmit = e => {
  e.preventDefault();

  console.log({
    email: e.currentTarget.elements.email.value,
    message: e.currentTarget.elements.message.value,
  });

  localStorage.removeItem(FORM_STATE);
  e.target.reset();
};

addEventListener('DOMContentLoaded', onLoad);
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);
