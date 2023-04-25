export class Card {
  constructor ({data, handleCardClik}, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClik = handleCardClik;
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
    this._card.closest('.element').remove();
  }

  _handleLikeCard() {
    this._buttonForLikeCard.classList.toggle('element__heart_active');
  }

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
    const card = this._element.querySelector('.element__basket');
    this._card = card;
    const buttonForLikeCard = this._element.querySelector('.element__heart');
    this._buttonForLikeCard = buttonForLikeCard;
    const photoLargeButton = this._element.querySelector('.element__large');
    this._photoLargeButton = photoLargeButton;
    this._card.addEventListener('click', () => this._deleteCard());
    this._buttonForLikeCard.addEventListener('click', () => this._handleLikeCard());
    this._photoLargeButton.addEventListener('click', () => this._handleCardClik(this._data));
  }
};
