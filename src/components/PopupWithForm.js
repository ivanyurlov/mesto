import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    const popupForm = this._popupElement.querySelector('.popup__form');
    this._popupForm = popupForm;
    const inputList = this._popupElement.querySelectorAll('.popup__input');
    this._inputList = inputList;
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }
};
