const showInputError = (inputError, input, validationMessage, config) => {
  inputError.textContent = validationMessage;
  inputError.classList.add(config.activeErrorClass);
  inputError.classList.remove(config.errorClass);
  input.classList.add(config.underlineErrorClass);
  console.log(input);
};

const hideInputError = (inputError, input, config) => {
  inputError.textContent = "";
  inputError.classList.remove(config.activeErrorClass);
  inputError.classList.add(config.errorClass);
  input.classList.remove(config.underlineErrorClass);
};

const inactiveButton = (submitButton, config) => {
  submitButton.classList.add(config.inactiveButtonClass);
  submitButton.disabled = true;
};

const activeButton = (submitButton, config ) => {
  submitButton.classList.remove(config.inactiveButtonClass);
  submitButton.disabled = false;
};

const checkInputValidity = (input, config) => {
  const inputError = document.querySelector(`${config.inputErrorTemplate}${input.id}`);
  if(!input.validity.valid) {
    showInputError(inputError, input, input.validationMessage, config);
  } else {
    hideInputError(inputError, input, config);
  }
};

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((input) => !input.validity.valid);
};

const toggleButtonState = (submitButton, inputList, config) => {
  if(!hasInvalidInput(inputList)) {
    activeButton(submitButton, config); 
  } else {
    inactiveButton(submitButton, config);
  }
};

const setEventListeners = (formList, config) => {
  formList.forEach((form) => {  
    const submitButton = form.querySelector(config.submitButtonSelector);
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    toggleButtonState(submitButton, inputList, config); 
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      inactiveButton(submitButton, config);
    });
    inputList.forEach((input) => {
      input.addEventListener('input', (event) => {
        checkInputValidity(input, config);
        toggleButtonState(submitButton, inputList, config); 
      });
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  setEventListeners(formList, config);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-name',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorTemplate: '.popup__input-name_type_error_',
  activeErrorClass: 'popup__input-name_type_error',
  underlineErrorClass: 'popup__input-name_underline_error',
  errorClass: 'popup__input-name_visible'
}); 

