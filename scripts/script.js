const editProfileButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('#user-name');
const jobInput = document.querySelector('#user-profession'); 
const nameProfile = document.querySelector('.profile__user-name');
const activityProfile = document.querySelector('.profile__activity');

nameInput.value = nameProfile.textContent;
jobInput.value = activityProfile.textContent;

function openPopup (popup) {
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

nameInput.addEventListener('submit', function(evt) {
  const value = evt.target.value;
  nameProfile.textContent = value;
});

jobInput.addEventListener('submit',  function(evt) {
  const value = evt.target.value;
  activityProfile.textContent = value; 
});

editProfileButton.addEventListener('click', function() {
  openPopup (popup);

});

popupCloseButton.addEventListener('click', function () {
  closePopup (popup);
  formElement.reset();
});

formElement.addEventListener('submit', handleFormSubmit);





