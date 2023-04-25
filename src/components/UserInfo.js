export class UserInfo {
  constructor ({userNameSelector, userProfessionSelector}) {
    const userNameElement = document.querySelector(userNameSelector);
    this._userNameElement = userNameElement;
    const userProfessionElement = document.querySelector(userProfessionSelector);
    this._userProfessionElement = userProfessionElement;
  }
  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userProfession: this._userProfessionElement.textContent
    }
  }
  setUserInfo({userName, userProfession}) {
    this._userNameElement.textContent = userName;
    this._userProfessionElement.textContent = userProfession;
  }
};