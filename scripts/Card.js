export class Card {
  constructor (data, cardTemplate, handleLargePhoto) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleLargePhoto = handleLargePhoto;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  _deleteCard() {
    const card = this._element.querySelector('.element__basket').closest('.element');
    card.remove();
  };

  _handleLikeCard () {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  };

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.element__photo');
    cardImage.src = this._link;
    cardImage.setAttribute('src', this._link);
    cardImage.setAttribute('alt', 'Фото - ' + this._name);
    const cardTitle = this._element.querySelector('.element__title');
    cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._element.querySelector('.element__basket').addEventListener('click', () => this._deleteCard(this._data));
    this._element.querySelector('.element__heart').addEventListener('click', () => this._handleLikeCard(this._data));
    this._element.querySelector('.element__large').addEventListener('click', () => this._handleLargePhoto(this._data));
  }
};
