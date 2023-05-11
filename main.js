(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"getUserInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar",{method:"PATCH",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editProfile",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me",{method:"PATCH",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{method:"POST",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"handleDeleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards/".concat(e),{method:"DELETE",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n,r){var o=t.data,i=t.handleCardClik,u=t.handleLikeClick,c=t.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this.cardId=o._id,this._ownerId=o.owner._id,this._userId=r,this._cardTemplate=n,this._handleCardClik=i,this._handleLikeClick=u,this._handleDeleteClick=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_likeCard",value:function(){this.isLiked()}},{key:"countLikes",value:function(e){this._likes=e.likes,this._cardLikesCounter.textContent=this._likes.length}},{key:"addLike",value:function(){this._buttonForLikeCard.classList.add("element__heart_active")}},{key:"removeLike",value:function(){this._buttonForLikeCard.classList.remove("element__heart_active")}},{key:"deleteCard",value:function(e){this._element.remove(e.cardId),this._element=null}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__photo");return e.src=this._link,e.setAttribute("src",this._link),e.setAttribute("alt","Фото - "+this._name),this._element.querySelector(".element__title").textContent=this._name,this._setEventListeners(),this._cardLikesCounter.textContent=this._likes.length,this._likeCard(),this._ownerId!==this._userId&&this._buttonForDeleteCard.remove(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._buttonForDeleteCard=this._element.querySelector(".element__basket"),this._buttonForLikeCard=this._element.querySelector(".element__heart"),this._photoLargeButton=this._element.querySelector(".element__large"),this._cardLikesCounter=this._element.querySelector(".element__counter"),this._buttonForDeleteCard.addEventListener("click",(function(){return e._handleDeleteClick(e)})),this._buttonForLikeCard.addEventListener("click",(function(){return e._handleLikeClick(e)})),this._photoLargeButton.addEventListener("click",(function(){return e._handleCardClik(e._name,e._link)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._cardContainer=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._cardContainer.prepend(e)}},{key:"addNewItem",value:function(e){this._cardContainer.append(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var p=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.code&&i.close()},(r=f(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target===e._popupElement&&e.close()})),this._popupCloseButton.addEventListener("click",(function(){e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photoPopupLargeImg=t._popupElement.querySelector(".popup__photo"),t._captionPopupLargeImg=t._popupElement.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){m(v(u.prototype),"open",this).call(this),this._photoPopupLargeImg.src=e.link,this._captionPopupLargeImg.textContent=e.name,this._photoPopupLargeImg.setAttribute("src",e.link),this._photoPopupLargeImg.setAttribute("alt","Фото - "+e.name)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"close",value:function(){g(w(u.prototype),"close",this).call(this)}},{key:"setSubmitAction",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;g(w(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),e.close()}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupElement.querySelector(".popup__form"),t._inputList=t._popupElement.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"close",value:function(){P(O(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;P(O(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._handleFormSubmit(n),e.close()}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var B=function(){function e(t){var n=t.userNameSelector,r=t.userProfessionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userProfessionElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userProfessionElement.textContent,avatar:this._userAvatarElement.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._userNameElement.textContent=t,this._userProfessionElement.textContent=n,this._userAvatarElement.src=r,this._userAvatarElement.setAttribute("src",r),this._userAvatarElement.setAttribute("alt","Фото - "+t)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function D(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===R(t)?t:String(t)}var N=D((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"_showInputError",(function(e,t,n){e.textContent=n,e.classList.add(r._config.activeErrorClass),e.classList.remove(r._config.errorClass),t.classList.add(r._config.underlineErrorClass)})),F(this,"_hideInputError",(function(e,t){e.textContent="",e.classList.remove(r._config.activeErrorClass),e.classList.add(r._config.errorClass),t.classList.remove(r._config.underlineErrorClass)})),F(this,"_inactiveButton",(function(){r._submitButton.classList.add(r._config.inactiveButtonClass),r._submitButton.disabled=!0})),F(this,"_activeButton",(function(){r._submitButton.classList.remove(r._config.inactiveButtonClass),r._submitButton.disabled=!1})),F(this,"_checkInputValidity",(function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.validity.valid?r._hideInputError(t,e,r._config):r._showInputError(t,e,e.validationMessage,r._config)})),F(this,"_hasInvalidInput",(function(){return Array.from(r._inputList).some((function(e){return!e.validity.valid}))})),F(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._inactiveButton(r._config):r._activeButton(r._config)})),F(this,"_setEventListeners",(function(){r._submitButton=r._formSelector.querySelector(r._config.submitButtonSelector),r._inputList=Array.from(r._formSelector.querySelectorAll(r._config.inputSelector)),r._toggleButtonState(r._config),r._formSelector.addEventListener("submit",(function(e){e.preventDefault(),r._inactiveButton(r._config)})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e,r._config),r._toggleButtonState(r._config)}))}))})),F(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formSelector=n})),U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",activeErrorClass:"popup__input-error_type_visible",errorClass:"popup__input-error_type_hidden",underlineErrorClass:"popup__input_underline-error"},V=document.querySelector(".profile__avatar"),z=document.querySelector(".profile__edit-button"),J=document.querySelector(".popup__form_user"),G=document.querySelector(".popup__form_avatar"),H=document.querySelector("#user-name"),M=document.querySelector("#user-profession"),K=document.querySelector("#user-avatar"),Q=document.querySelector(".profile__add-button"),W=document.querySelector(".popup__form_card"),X=document.querySelectorAll(".popup__spinner"),Y=document.querySelectorAll(".popup__save-button"),Z=new N(U,J),$=new N(U,W),ee=new N(U,G);function te(e){e?(X.forEach((function(e){e.classList.add("popup__spinner_visible")})),Y.forEach((function(e){e.classList.add("popup__save-button_hidden")}))):(X.forEach((function(e){e.classList.remove("popup__spinner_visible")})),Y.forEach((function(e){e.classList.remove("popup__save-button_hidden")})))}function ne(e){e.isLiked()?ye.removeLikeCard(e.cardId).then((function(t){e.removeLike(),e.countLikes(t)})).catch((function(e){console.error("Ошибка при дислайке карточки: ".concat(e))})):ye.addLikeCard(e.cardId).then((function(t){e.addLike(),e.countLikes(t)})).catch((function(e){console.error("Ошибка при лайке карточки: ".concat(e))}))}function re(e){ce.open(),ce.setSubmitAction((function(){ye.handleDeleteCard(e.cardId).then((function(t){e.deleteCard(t),ce.close()})).catch((function(e){console.error("Ошибка при удалении карточки: ".concat(e))}))}))}var oe=function(e){return new i({data:e,handleCardClik:function(){ae.open(e)},handleLikeClick:ne,handleDeleteClick:re},"#elementTemplate",pe).generateCard()},ie=new B({userNameSelector:".profile__user-name",userProfessionSelector:".profile__activity",userAvatarSelector:".profile__avatar"}),ue=new a({renderer:function(e){var t=oe(e);ue.addNewItem(t)}},".elements"),ce=new E(".popup_confirm"),ae=new b(".popup_large"),le=new I({popupSelector:".popup_avatar",handleFormSubmit:function(e){te(!0),ye.editAvatar(e.avatar).then((function(e){ie.setUserInfo(e)})).catch((function(e){console.error("Ошибка при редактировании аватара: ".concat(e))})).finally((function(){te(!1)}))}}),se=new I({popupSelector:".popup_user",handleFormSubmit:function(e){te(!0),ye.editProfile(e.userName,e.userProfession).then((function(e){ie.setUserInfo(e)})).catch((function(e){console.error("Ошибка при редактировании профиля: ".concat(e))})).finally((function(){te(!1)}))}}),fe=new I({popupSelector:".popup_card",handleFormSubmit:function(e){te(!0),ye.addNewCard(e.name,e.link).then((function(e){var t=oe(e);ue.addItem(t)})).catch((function(e){console.error("Ошибка при добавлении новой карточки: ".concat(e))})).finally((function(){te(!1)}))}});Z.enableValidation(),$.enableValidation(),ee.enableValidation(),ce.setEventListeners(),ae.setEventListeners(),fe.setEventListeners(),le.setEventListeners(),se.setEventListeners(),V.addEventListener("click",(function(){var e=ie.getUserInfo();K.value=e.avatar,le.open()})),z.addEventListener("click",(function(){var e=ie.getUserInfo();K.value=e.avatar,H.value=e.name,M.value=e.about,se.open()})),Q.addEventListener("click",(function(){fe.open()}));var pe,ye=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}});ye.getUserInfo().then((function(e){ie.setUserInfo(e),pe=e._id})).catch((function(e){console.error("Ошибка при загрузке профиля: ".concat(e))})),ye.getInitialCards().then((function(e){ue.renderItems(e)})).catch((function(e){console.error("Ошибка при загрузке карточек: ".concat(e))}))})();
//# sourceMappingURL=main.js.map