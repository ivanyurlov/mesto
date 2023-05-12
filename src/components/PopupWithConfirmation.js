import {Popup} from './Popup.js';

export class PopupWithConfirmation extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  close() {
    super.close();
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
  }
};
