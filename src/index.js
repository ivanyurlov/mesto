import './styles/index.css';
import {initialCards} from './cards.js';
import {Card} from './components/Card.js';
import {Section} from './components/Section.js';
import {Popup} from './components/Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';
import {FormValidator} from './components/FormValidator.js';
import {validationConfig} from './constants.js'


const profileEditButton = document.querySelector('.profile__edit-button');
const formPopupUser = document.querySelector('.popup__form_user'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const cardAddButton = document.querySelector('.profile__add-button');
const formPopupCard = document.querySelector('.popup__form_card');


const userFormValidator = new FormValidator(validationConfig, formPopupUser);
const cardFormValidator = new FormValidator(validationConfig, formPopupCard);

const userInfo = new UserInfo({
  userNameSelector: '.profile__user-name',
  userProfessionSelector: '.profile__activity'
});

const createCard = (data) => {
  const cardNew = new Card({
    data, 
    handleCardClik: () => {
      popupImage.open(data);
    }
  }, '#elementTemplate');  
  return cardNew.generateCard();
};

const cardsList = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardReady = createCard(data);
    cardsList.addItem(cardReady)
  }
}, '.elements');

const popup = new Popup('.popup');

const popupImage = new PopupWithImage('.popup_large');

const popupFormUser = new PopupWithForm({
  popupSelector: '.popup_user', 
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

popupFormUser.setEventListeners();

const popupFormCard = new PopupWithForm({
  popupSelector: '.popup_card', 
  handleFormSubmit: (data) => {
    const cardReady = createCard(data);
    cardsList.addItem(cardReady);
  }
});

userFormValidator.enableValidation();
cardFormValidator.enableValidation();
cardsList.renderItems();
popup.setEventListeners();
popupImage.setEventListeners();
popupFormCard.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  jobInput.value = currentUserInfo.userProfession;
  popupFormUser.open();
});

cardAddButton.addEventListener('click', () => {
  popupFormCard.open();
});