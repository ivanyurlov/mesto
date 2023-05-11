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


const avatarEditButton = document.querySelector('.profile__avatar');
const profileEditButton = document.querySelector('.profile__edit-button');
const formPopupUser = document.querySelector('.popup__form_user');
const formPopupAvatar = document.querySelector('.popup__form_avatar');
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession');
const avatarInput = document.querySelector('#user-avatar');
const cardAddButton = document.querySelector('.profile__add-button');
const formPopupCard = document.querySelector('.popup__form_card');
const spinners = document.querySelectorAll('.popup__spinner');
const submitButtons = document.querySelectorAll('.popup__save-button');


const userFormValidator = new FormValidator(validationConfig, formPopupUser);
const cardFormValidator = new FormValidator(validationConfig, formPopupCard);
const avatarFormValidator = new FormValidator(validationConfig, formPopupAvatar);

function renderLoading(isLoading) {
  if (isLoading) {
    spinners.forEach(item => {
      item.classList.add('popup__spinner_visible');
    })
    submitButtons.forEach(item => {
      item.classList.add('popup__save-button_hidden');
    })
  } else {
    spinners.forEach(item => {
      item.classList.remove('popup__spinner_visible');
    })
    submitButtons.forEach(item => {
      item.classList.remove('popup__save-button_hidden');
    })
  }
};

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
    renderLoading(true);
    api.editAvatar(inputValues['avatar'])  
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((error) => {
        console.error(`Ошибка при редактировании аватара: ${error}`);
      })
      .finally(() => {
        renderLoading(false);
      }); 
  }
});

const popupFormUser = new PopupWithForm({
  popupSelector: '.popup_user', 
  handleFormSubmit: (inputValues) => {
    renderLoading(true);
    api.editProfile(inputValues['userName'], inputValues['userProfession'])  
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch((error) => {
        console.error(`Ошибка при редактировании профиля: ${error}`);
      })
      .finally(() => {
        renderLoading(false);
      });  
  }
});

const popupFormCard = new PopupWithForm({
  popupSelector: '.popup_card', 
  handleFormSubmit: (inputValues) => {
    renderLoading(true);
    api.addNewCard(inputValues['name'], inputValues['link'])
      .then((res) => {
        const cardReady = createCard(res);
        cardsList.addItem(cardReady);
      })
      .catch((error) => {
        console.error(`Ошибка при добавлении новой карточки: ${error}`);
      })
      .finally(() => {
        renderLoading(false);
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
  const currentUserInfo = userInfo.getUserInfo();
  avatarInput.value = currentUserInfo.avatar;
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

api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userId = res._id;
  })
  .catch((error) => {
    console.error(`Ошибка при загрузке профиля: ${error}`);
  });

api.getInitialCards()
  .then((res) => {
    cardsList.renderItems(res);
  })
  .catch((error) => {
    console.error(`Ошибка при загрузке карточек: ${error}`);
  });
