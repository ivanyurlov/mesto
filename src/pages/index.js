import './index.css';
import {Api} from '../components/Api.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../utils/constants.js'
import {renderLoadingUser, renderLoadingCard, renderLoadingAvatar} from '../utils/renderLoading.js'

const avatarEditButton = document.querySelector('.profile__avatar');
const profileEditButton = document.querySelector('.profile__edit-button');
const formPopupUser = document.querySelector('.popup__form_user');
const formPopupAvatar = document.querySelector('.popup__form_avatar');
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession');
const avatarInput = document.querySelector('#user-avatar');
const cardAddButton = document.querySelector('.profile__add-button');
const formPopupCard = document.querySelector('.popup__form_card');

const userFormValidator = new FormValidator(validationConfig, formPopupUser);
const cardFormValidator = new FormValidator(validationConfig, formPopupCard);
const avatarFormValidator = new FormValidator(validationConfig, formPopupAvatar);

function handleLikeClick(card) {
  if (card.isLiked()) {
    api.removeLikeCard(card.cardId)
    .then((res) => {
      card.removeLike();
      card.countLikes(res);
    })
    .catch((error) => {
      console.error(`Ошибка при дислайке карточки: ${error}`);
    })
  } else {
    api.addLikeCard(card.cardId)
    .then((res) => {
      card.addLike();
      card.countLikes(res);
    })
    .catch((error) => {
      console.error(`Ошибка при лайке карточки: ${error}`);
    })
  }
};

function handleDeleteClick(card) {
  popupConfirmDelete.open();
  popupConfirmDelete.setSubmitAction(() => {
    api.handleDeleteCard(card.cardId)
    .then((res) => {
      card.deleteCard(res);
      popupConfirmDelete.close();
    })
    .catch((error) => {
      console.error(`Ошибка при удалении карточки: ${error}`);
    })
  })
};

const createCard = (data) => {
  const card = new Card({
    data, 
    handleCardClik: () => {
      popupImage.open(data);
    },
    handleLikeClick,
    handleDeleteClick
  }, '#elementTemplate',
  userId);
  return card.generateCard();
};

const userInfo = new UserInfo({
  userNameSelector: '.profile__user-name',
  userProfessionSelector: '.profile__activity',
  userAvatarSelector: '.profile__avatar'
});

const cardsList = new Section({
  renderer: (data) => {
    const cardReady = createCard(data);
    cardsList.addNewItem(cardReady);
  }
}, '.elements');

const popupConfirmDelete = new PopupWithConfirmation('.popup_confirm');

const popupImage = new PopupWithImage('.popup_large');

const popupFormAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar', 
  handleFormSubmit: (inputValues) => {
    renderLoadingAvatar(true);
    api.editAvatar(inputValues['avatar'])  
      .then((res) => {
        userInfo.setUserInfo(res);
        popupFormAvatar.close();
      })
      .catch((error) => {
        console.error(`Ошибка при редактировании аватара: ${error}`);
      })
      .finally(() => {
        renderLoadingAvatar(false);
      }); 
  }
});

const popupFormUser = new PopupWithForm({
  popupSelector: '.popup_user', 
  handleFormSubmit: (inputValues) => {
    renderLoadingUser(true);
    api.editProfile(inputValues['userName'], inputValues['userProfession'])  
      .then((res) => {
        userInfo.setUserInfo(res);
        popupFormUser.close();
      })
      .catch((error) => {
        console.error(`Ошибка при редактировании профиля: ${error}`);
      })
      .finally(() => {
        renderLoadingUser(false);
      });  
  }
});

const popupFormCard = new PopupWithForm({
  popupSelector: '.popup_card', 
  handleFormSubmit: (inputValues) => {
    renderLoadingCard(true);
    api.addNewCard(inputValues['name'], inputValues['link'])
      .then((res) => {
        const cardReady = createCard(res);
        cardsList.addItem(cardReady);
        popupFormCard.close();
      })
      .catch((error) => {
        console.error(`Ошибка при добавлении новой карточки: ${error}`);
      })
      .finally(() => {
        renderLoadingCard(false);
      });
  }
}); 

userFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
popupConfirmDelete.setEventListeners();
popupImage.setEventListeners();
popupFormCard.setEventListeners();
popupFormAvatar.setEventListeners();
popupFormUser.setEventListeners();

avatarEditButton.addEventListener('click', () => {
  avatarInput.value = '';
  popupFormAvatar.open();
});

profileEditButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  avatarInput.value = currentUserInfo.avatar;
  nameInput.value = currentUserInfo.name;
  jobInput.value = currentUserInfo.about;
  popupFormUser.open();
});

cardAddButton.addEventListener('click', () => {
  popupFormCard.open();
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
    'Content-Type': 'application/json'
  }
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(cardData);
  })
  .catch((error) => {
    console.error(`Ошибка при загрузке профиля и карточек: ${error}`);
  });
