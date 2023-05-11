import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._photoPopupLargeImg = this._popupElement.querySelector('.popup__photo');
    this._captionPopupLargeImg = this._popupElement.querySelector('.popup__caption');
  }
  open(data) {
    super.open();
    this._photoPopupLargeImg.src = data.link;
    this._captionPopupLargeImg.textContent = data.name;
    this._photoPopupLargeImg.setAttribute('src', data.link);
    this._photoPopupLargeImg.setAttribute('alt', 'Фото - ' + data.name);
  }
};