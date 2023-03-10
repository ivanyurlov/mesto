const profileEditButton = document.querySelector('.profile__edit-button');
const popupUser = document.querySelector('.popup_user');
const popupCloseButtonUser = document.querySelector('.popup__close-button');
const formPopupUser = document.querySelector('.popup__form_user'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');
const popups = document.querySelectorAll('.popup');

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
  const buttonForDelete = newCard.querySelector('.element__basket');
  buttonForDelete.addEventListener('click', deleteCard);

  const buttonForLikeCard = newCard.querySelector('.element__heart');
  buttonForLikeCard.addEventListener('click', handleLikeCard);
  
  const photoLargeButton = newCard.querySelector('.element__large');
  photoLargeButton.addEventListener("click", () => handleLargePhoto(card));
  function handleLargePhoto (card) {
    popupCaption.textContent = card.name;
    popupPhoto.setAttribute('src', card.link);
    popupPhoto.setAttribute('alt', 'Фото - ' + card.name);
    openPopup (2);
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

function openPopup (index) {
  popups[index].classList.add('popup_opened');
};

function closePopup (index) {
  popups[index].classList.remove('popup_opened');
};

function getProfileToUser () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = activityProfile.textContent;
};

function handleFormSubmitUser (event) {
  event.preventDefault();
 
  nameProfile.textContent = nameInput.value;
  activityProfile.textContent = jobInput.value;
  closePopup (0);
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
  closePopup (1);
};

function handleLikeCard (event) {
  const buttonForLikeCard = event.target;
  buttonForLikeCard.classList.toggle('element__heart_active');
};

profileEditButton.addEventListener('click', function() {
  openPopup (0);
  getProfileToUser ();
});

cardAddButton.addEventListener('click', function() {
  openPopup (1);
});

popupCloseButtonUser.addEventListener('click', function () {
  closePopup (0);
});

popupCloseButtonCard.addEventListener('click', function () {
  closePopup (1);
});

popupCloseButtonLarge.addEventListener('click', function () {
  closePopup (2);
});

formPopupUser.addEventListener('submit', handleFormSubmitUser);

formPopupCard.addEventListener('submit', handleFormSubmitCard);

initialCards.forEach(renderCard);