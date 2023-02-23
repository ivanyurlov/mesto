const editProfileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');

function openPopup (popup) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = activityProfile.textContent;
  popup.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
 
  nameProfile.textContent = nameInput.value;
  activityProfile.textContent = jobInput.value; 
  closePopup (popup);
};

editProfileButton.addEventListener('click', function() {
  openPopup (popup);

});

popupCloseButton.addEventListener('click', function () {
  closePopup (popup);
});

formElement.addEventListener('submit', handleFormSubmit);





