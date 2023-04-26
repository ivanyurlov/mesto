import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    const photoPopupLargeImg = this._popupElement.querySelector('.popup__photo');
    this._photoPopupLargeImg = photoPopupLargeImg;
    const captionPopupLargeImg = this._popupElement.querySelector('.popup__caption');
    this._captionPopupLargeImg =  captionPopupLargeImg;
  }
  open(data) {
    super.open();
    this._photoPopupLargeImg.src = data.link;
    this._captionPopupLargeImg.textContent = data.name;
    this._photoPopupLargeImg.setAttribute('src', data.link);
    this._photoPopupLargeImg.setAttribute('alt', 'Фото - ' + data.name);
  }
};