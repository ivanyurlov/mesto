let editProfileButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editProfileButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

let popupCloseButton = document.querySelector('.popup__close-button');
popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

let formElement = document.querySelector('.popup__form'); 
let nameInput = document.querySelector('.popup__name'); 
let jobInput = document.querySelector('.popup__profession'); 

let nameProfile = document.querySelector('.profile__user-name');
let activityProfile = document.querySelector('.profile__activity');

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    activityProfile.textContent = jobInput.value;
    popup.classList.remove('popup_opened');

};

formElement.addEventListener('submit', handleFormSubmit);





