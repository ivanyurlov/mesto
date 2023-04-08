export class FormValidator {
  constructor (validationConfig, formPopupUser, formPopupCard) {
    this._config = validationConfig;
    this._formPopupUser = formPopupUser;
    this._formPopupCard = formPopupCard;
  };

  _showInputError = (inputError, input, validationMessage) => {
    inputError.textContent = validationMessage;
    inputError.classList.add(this._config.activeErrorClass);
    inputError.classList.remove(this._config.errorClass);
    input.classList.add(this._config.underlineErrorClass);
  };

  _hideInputError = (inputError, input) => {
    inputError.textContent = "";
    inputError.classList.remove(this._config.activeErrorClass);
    inputError.classList.add(this._config.errorClass);
    input.classList.remove(this._config.underlineErrorClass);
  };

  _inactiveButton = (submitButton) => {
    submitButton.classList.add(this._config.inactiveButtonClass);
    submitButton.disabled = true;
  };

  _activeButton = (submitButton) => {
    submitButton.classList.remove(this._config.inactiveButtonClass);
    submitButton.disabled = false;
  };
  
  _checkInputValidity = (input) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    if(!input.validity.valid) {
      this._showInputError(inputError, input, input.validationMessage, this._config);
    } else {
      this._hideInputError(inputError, input, this._config);
    }
  };

  _hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => !input.validity.valid);
  };

  _toggleButtonState = (submitButton, inputList) => {
    if(!this._hasInvalidInput(inputList)) {
      this._activeButton(submitButton, this._config); 
    } else {
      this._inactiveButton(submitButton, this._config);
    }
  };

  _setEventListeners = () => {
    const formList = Array.from(document.querySelectorAll(this._config.formSelector));
    formList.forEach((form) => {  
      const submitButton = form.querySelector(this._config.submitButtonSelector);
      const inputList = Array.from(form.querySelectorAll(this._config.inputSelector));
      this._toggleButtonState(submitButton, inputList, this._config); 
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._inactiveButton(submitButton, this._config);
      });
      inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input, this._config);
          this._toggleButtonState(submitButton, inputList, this._config); 
        });
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
};