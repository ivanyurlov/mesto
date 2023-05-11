export class Popup {
  constructor (popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _handleEscClose = (event) => {
    if(event.code === 'Escape') { 
      this.close();
    } 
  }
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  setEventListeners() {
    this._popupElement.addEventListener('click', (event) => {
      if(event.target === this._popupElement) {
        this.close();
      };
      
    });
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    });
  }
};