export class UserInfo {
  constructor ({userNameSelector, userProfessionSelector, userAvatarSelector}) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(userProfessionSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._userProfessionElement.textContent,
      avatar: this._userAvatarElement.src
    }
  }
  
  setUserInfo({name, about, avatar}) {
    this._userNameElement.textContent = name;
    this._userProfessionElement.textContent = about;
    this._userAvatarElement.src = avatar;
    this._userAvatarElement.setAttribute('src', avatar);
    this._userAvatarElement.setAttribute('alt', 'Фото - ' + name);
  }
};