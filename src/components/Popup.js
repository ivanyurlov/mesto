export class Popup {
  constructor (popupSelector) {
    const popupElement = document.querySelector(popupSelector);
    this._popupElement = popupElement;
    const popupCloseButton = this._popupElement.querySelector('.popup__close-button');
    this._popupCloseButton = popupCloseButton;
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