export class FormValidator {
  constructor (validationConfig, formSelector) {
    this._config = validationConfig;
    this._formSelector = formSelector;
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

  _inactiveButton = () => {
    this._submitButton.classList.add(this._config.inactiveButtonClass);
    this._submitButton.disabled = true;
  };

  _activeButton = () => {
    this._submitButton.classList.remove(this._config.inactiveButtonClass);
    this._submitButton.disabled = false;
  };
  
  _checkInputValidity = (input) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    if(!input.validity.valid) {
      this._showInputError(inputError, input, input.validationMessage, this._config);
    } else {
      this._hideInputError(inputError, input, this._config);
    }
  };

  _hasInvalidInput = () => {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  };

  _toggleButtonState = () => {
    if(!this._hasInvalidInput()) {
      this._activeButton(this._config);
    } else {
      this._inactiveButton(this._config);
    }
  };

  _setEventListeners = () => {
    const submitButton = this._formSelector.querySelector(this._config.submitButtonSelector);
    this._submitButton = submitButton;
    const inputList = Array.from(this._formSelector.querySelectorAll(this._config.inputSelector));
    this._inputList = inputList;
    this._toggleButtonState(this._config);
    this._formSelector.addEventListener('submit', (event) => {
      event.preventDefault();
      this._inactiveButton(this._config);
    });
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input, this._config);
        this._toggleButtonState(this._config);
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
};