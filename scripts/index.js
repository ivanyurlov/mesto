import {initialCards} from './cards.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {validationConfig} from './constants.js'


const profileEditButton = document.querySelector('.profile__edit-button');
const popupUser = document.querySelector('.popup_user');
const popupCloseButtonUser = document.querySelector('.popup__close-button');
const formPopupUser = document.querySelector('.popup__form_user'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');

const cardTemplate = document.querySelector('#elementTemplate').content;
const cardAddButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCloseButtonCard = document.querySelector('.popup__close-button_card');
const formPopupCard = document.querySelector('.popup__form_card');
const titleInput = document.querySelector('#input-title');
const urlInput = document.querySelector('#input-url');

const popupLargeImage = document.querySelector('.popup_large');
const photoPopupLargeImg = document.querySelector('.popup__photo');
const captionPopupLargeImg = document.querySelector('.popup__caption');
const popupCloseButtonLargeImg = document.querySelector('.popup__close-button_large');

const userFormValidator = new FormValidator(validationConfig, formPopupUser);
const cardFormValidator = new FormValidator(validationConfig, formPopupCard);

userFormValidator.enableValidation();
cardFormValidator.enableValidation();

initialCards.forEach((item) => {
  renderCard (item);
});

function handleLargePhoto () {
  captionPopupLargeImg.textContent = this._name;
  photoPopupLargeImg.setAttribute('src', this._link);
  photoPopupLargeImg.setAttribute('alt', 'Фото - ' + this._name);
  openPopup (popupLargeImage);
};
  
function renderCard (item) {
  const card = new Card(item, '#elementTemplate', handleLargePhoto);
  const cardElement = card.generateCard();
  const cardsContainer = document.querySelector('.elements'); 
  cardsContainer.prepend(cardElement);
};

function handlePressEscape (event) {
  if(event.code === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup (popupOpened);
  } 
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlePressEscape);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlePressEscape);
};

function getProfileToUser () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = activityProfile.textContent;
};

function handleFormSubmitUser (event) {
  event.preventDefault();
 
  nameProfile.textContent = nameInput.value;
  activityProfile.textContent = jobInput.value;
  closePopup (popupUser);
};

function handleFormSubmitCard (event) {
  event.preventDefault();
  
  const name = titleInput.value;
  const link = urlInput.value;
  const card = {
    name: name,
    link: link
  };
  renderCard (card);
  
  closePopup (popupCard);
};

profileEditButton.addEventListener('click', function() {
  openPopup (popupUser);
  getProfileToUser ();
});

cardAddButton.addEventListener('click', function() {
  openPopup (popupCard);
  formPopupCard.reset();
});

popupCloseButtonUser.addEventListener('click', function () {
  closePopup (popupUser);
});

popupCloseButtonCard.addEventListener('click', function () {
  closePopup (popupCard);
});

popupCloseButtonLargeImg.addEventListener('click', function () {
  closePopup (popupLargeImage);
});

formPopupUser.addEventListener('submit', handleFormSubmitUser);

formPopupCard.addEventListener('submit', handleFormSubmitCard);

popupUser.addEventListener('click', (event) => {
  if(event.target === popupUser) {
    closePopup (popupUser);
  };
});

popupCard.addEventListener('click', (event) => {
  if(event.target === popupCard) {
    closePopup (popupCard);
  };
});

popupLargeImage.addEventListener('click', (event) => {
  if(event.target === popupLargeImage) {
    closePopup (popupLargeImage);
  };
});