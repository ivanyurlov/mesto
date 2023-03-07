const editProfileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formPopup = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');

const addCardButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCloseButtonCard = document.querySelector('.popup__close-button_card');
const formPopupCard = document.querySelector('.popup__form_card');
const titleInput = document.querySelector('#input-title');
const urlInput = document.querySelector('#input-url');

const popupLarge = document.querySelector('.popup_large');
const popupPhoto = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseButtonLarge = document.querySelector('.popup__close-button_large');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cards = document.querySelector('.elements');

function creatCard(card) {
  const newCard = document.querySelector('#elementTemplate').content.cloneNode(true);
  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.element__photo');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', 'Фото - ' + card.name);
  const deleteButton = newCard.querySelector('.element__basket');
  deleteButton.addEventListener('click', deleteCard);

  const likeButtonCard = newCard.querySelector('.element__heart');
  likeButtonCard.addEventListener('click', handleLikeCard);
  
  const photoLargeButton = newCard.querySelector('.element__large');
  photoLargeButton.addEventListener("click", () => handleLargePhoto(card));
  function handleLargePhoto (card) {
    popupCaption.textContent = card.name;
    popupPhoto.setAttribute('src', card.link);
    popupPhoto.setAttribute('alt', 'Фото - ' + card.name);
    openPopupLarge (popupLarge);
  };

  cards.prepend(newCard);
};

function deleteCard(event) {
  const button = event.target;
  const card = button.closest('.element');
  card.remove();
};

function openPopup (popup) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = activityProfile.textContent;
  popup.classList.add('popup_opened');
};

function openPopupCard (popupCard) {
  popupCard.classList.add('popup_opened');
};

function openPopupLarge (popupLarge) {
  popupLarge.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

function closePopupCard (popupCard) {
  popupCard.classList.remove('popup_opened');
};

function closePopupLarge (popupLarge) {
  popupLarge.classList.remove('popup_opened');
};

function handleFormSubmit (event) {
  event.preventDefault();
 
  nameProfile.textContent = nameInput.value;
  activityProfile.textContent = jobInput.value;
  closePopup (popup);
};

function handleFormSubmitCard (event) {
  event.preventDefault();

  const name = document.querySelector('#input-title').value;
  const link = document.querySelector('#input-url').value;
  console.log(link);
  const card = {
    name: name,
    link: link
  };
  creatCard(card);
  closePopupCard (popupCard);
};

function handleLikeCard (event) {
  const likeButtonCard = event.target;
  likeButtonCard.classList.toggle('element__heart_active');
};

editProfileButton.addEventListener('click', function() {
  openPopup (popup);
});

addCardButton.addEventListener('click', function() {
  openPopupCard (popupCard);
});

popupCloseButton.addEventListener('click', function () {
  closePopup (popup);
});

popupCloseButtonCard.addEventListener('click', function () {
  closePopupCard (popupCard);
});

popupCloseButtonLarge.addEventListener('click', function () {
  closePopupLarge (popupLarge);
});

formPopup.addEventListener('submit', handleFormSubmit);

formPopupCard.addEventListener('submit', handleFormSubmitCard);

initialCards.forEach(creatCard);