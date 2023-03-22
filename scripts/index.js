const profileEditButton = document.querySelector('.profile__edit-button');
const popupUser = document.querySelector('.popup_user');
const popupCloseButtonUser = document.querySelector('.popup__close-button');
const formPopupUser = document.querySelector('.popup__form_user'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');

const cardTemplate = document.querySelector('#elementTemplate').content
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

const cardsContainer = document.querySelector('.elements');

function creatCard(card) {
  const newCard = cardTemplate.cloneNode(true)
  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.element__photo');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', 'Фото - ' + card.name);
  const buttonForDelete = newCard.querySelector('.element__basket');
  buttonForDelete.addEventListener('click', deleteCard);

  const buttonForLikeCard = newCard.querySelector('.element__heart');
  buttonForLikeCard.addEventListener('click', handleLikeCard);
  
  const photoLargeButton = newCard.querySelector('.element__large');
  photoLargeButton.addEventListener('click', () => handleLargePhoto(card));
  function handleLargePhoto (card) {
    captionPopupLargeImg.textContent = card.name;
    photoPopupLargeImg.setAttribute('src', card.link);
    photoPopupLargeImg.setAttribute('alt', 'Фото - ' + card.name);
    openPopup (popupLargeImage);
  };

  return newCard;
};

function renderCard (card) {
  const cardReady = creatCard(card);
  cardsContainer.prepend(cardReady);
};

function deleteCard(event) {
  const button = event.target;
  const card = button.closest('.element');
  card.remove();
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
  console.log(link);
  const card = {
    name: name,
    link: link
  };
  renderCard (card);
  closePopup (popupCard);
};

function handleLikeCard (event) {
  const buttonForLikeCard = event.target;
  buttonForLikeCard.classList.toggle('element__heart_active');
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

initialCards.forEach(renderCard);

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