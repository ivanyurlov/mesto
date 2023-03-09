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

const popupLarge = document.querySelector('.popup_large');
const popupPhoto = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');
const popupCloseButtonLarge = document.querySelector('.popup__close-button_large');

const cardsContainer = document.querySelector('.elements');

function creatCard(card) {
  const newCard = cardTemplate.cloneNode(true)
  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.element__photo');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', 'Фото - ' + card.name);
  const ButtonForDelete = newCard.querySelector('.element__basket');
  ButtonForDelete.addEventListener('click', deleteCard);

  const ButtonForLikeCard = newCard.querySelector('.element__heart');
  ButtonForLikeCard.addEventListener('click', handleLikeCard);
  
  const photoLargeButton = newCard.querySelector('.element__large');
  photoLargeButton.addEventListener("click", () => handleLargePhoto(card));
  function handleLargePhoto (card) {
    popupCaption.textContent = card.name;
    popupPhoto.setAttribute('src', card.link);
    popupPhoto.setAttribute('alt', 'Фото - ' + card.name);
    openPopupLarge (popupLarge);
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

function openPopupUser (popupUser) {
  popupUser.classList.add('popup_opened');
};

function openPopupCard (popupCard) {
  popupCard.classList.add('popup_opened');
};

function openPopupLarge (popupLarge) {
  popupLarge.classList.add('popup_opened');
};

function closePopupUser (popupUser) {
  popupUser.classList.remove('popup_opened');
};

function closePopupCard (popupCard) {
  popupCard.classList.remove('popup_opened');
};

function closePopupLarge (popupLarge) {
  popupLarge.classList.remove('popup_opened');
};

function getProfileToUser () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = activityProfile.textContent;
};

function handleFormSubmitUser (event) {
  event.preventDefault();
 
  nameProfile.textContent = nameInput.value;
  activityProfile.textContent = jobInput.value;
  closePopupUser (popupUser);
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
  closePopupCard (popupCard);
};

function handleLikeCard (event) {
  const ButtonForLikeCard = event.target;
  ButtonForLikeCard.classList.toggle('element__heart_active');
};

profileEditButton.addEventListener('click', function() {
  openPopupUser (popupUser);
  getProfileToUser ();
});

cardAddButton.addEventListener('click', function() {
  openPopupCard (popupCard);
});

popupCloseButtonUser.addEventListener('click', function () {
  closePopupUser (popupUser);
});

popupCloseButtonCard.addEventListener('click', function () {
  closePopupCard (popupCard);
});

popupCloseButtonLarge.addEventListener('click', function () {
  closePopupLarge (popupLarge);
});

formPopupUser.addEventListener('submit', handleFormSubmitUser);

formPopupCard.addEventListener('submit', handleFormSubmitCard);

initialCards.forEach(renderCard);