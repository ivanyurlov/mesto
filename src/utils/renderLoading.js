const spinnerUser = document.querySelector('.popup__spinner_user');
const spinnerCard = document.querySelector('.popup__spinner_card');
const spinnerAvatar = document.querySelector('.popup__spinner_avatar');
const submitButtonUser = document.querySelector('.popup__save-button_user');
const submitButtonCard = document.querySelector('.popup__save-button_card');
const submitButtonAvatar = document.querySelector('.popup__save-button_avatar');

export function renderLoadingUser(isLoading) {
  if (isLoading) {
    spinnerUser.classList.add('popup__spinner_visible');
    submitButtonUser.classList.add('popup__save-button_hidden');
  } else {
    spinnerUser.classList.remove('popup__spinner_visible');
    submitButtonUser.classList.remove('popup__save-button_hidden');
  }
};

export function renderLoadingCard(isLoading) {
  if (isLoading) {
    spinnerCard.classList.add('popup__spinner_visible');
    submitButtonCard.classList.add('popup__save-button_hidden');
  } else {
    spinnerCard.classList.remove('popup__spinner_visible');
    submitButtonCard.classList.remove('popup__save-button_hidden');
  }
};

export function renderLoadingAvatar(isLoading) {
  if (isLoading) {
    spinnerAvatar.classList.add('popup__spinner_visible');
    submitButtonAvatar.classList.add('popup__save-button_hidden');
  } else {
    spinnerAvatar.classList.remove('popup__spinner_visible');
    submitButtonAvatar.classList.remove('popup__save-button_hidden');
  }
};