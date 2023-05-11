export class Api {
  //constructor () {

  //}

  getUserInfo() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me', {
      method: 'GET',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
      method: 'GET',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editAvatar(avatar) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "avatar": avatar
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });  
  }

  editProfile(name, about) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name, 
        "about": about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }


  addNewCard(name, link) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
      method: 'POST',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  addLikeCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  removeLikeCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  handleDeleteCard(cardId) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '8f7d7381-1699-4147-b766-23ace6ae1f0d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
};
