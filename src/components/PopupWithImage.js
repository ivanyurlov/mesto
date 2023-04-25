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
    this._name = data.name;
    this._link = data.link;
    this._photoPopupLargeImg.src = this._link;
    this._captionPopupLargeImg.textContent = this._name;
    this._photoPopupLargeImg.setAttribute('src', this._link);
    this._photoPopupLargeImg.setAttribute('alt', 'Фото - ' + this._name);
  }
};