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
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
};
