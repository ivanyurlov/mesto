export class Card {
  constructor ({data, handleCardClik, handleLikeClick, handleDeleteClick}, cardTemplate, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this.cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardTemplate = cardTemplate;
    this._handleCardClik = handleCardClik;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }

  isLiked() {
    return this._likes.some((data) => data._id === this._userId);
  }

  _likeCard() {
    this.isLiked();
  }

  countLikes(data) {
    this._likes = data.likes;
    this._cardLikesCounter.textContent = this._likes.length;
  }

  addLike() {
    this._buttonForLikeCard.classList.add('element__heart_active');
  }

  removeLike() {
    this._buttonForLikeCard.classList.remove('element__heart_active');
  }

  deleteCard(data) {
    this._element.remove(data.cardId);
    this._element = null;
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
    this._cardLikesCounter.textContent = this._likes.length;
    this._likeCard();
    const userLikedCard = this._likes.find((data) => data._id === this._userId);
    if (userLikedCard) {
      this.addLike();
    }
    if (this._ownerId !== this._userId) {
      this._buttonForDeleteCard.remove();
    }
    return this._element;
  }
 
  _setEventListeners() {
    this._buttonForDeleteCard = this._element.querySelector('.element__basket');
    this._buttonForLikeCard = this._element.querySelector('.element__heart');
    this._photoLargeButton = this._element.querySelector('.element__large');
    this._cardLikesCounter = this._element.querySelector('.element__counter');

    this._buttonForDeleteCard.addEventListener('click', () => this._handleDeleteClick(this));
    this._buttonForLikeCard.addEventListener('click', () => this._handleLikeClick(this));
    this._photoLargeButton.addEventListener('click', () => this._handleCardClik(this._name, this._link));
  }
};
