(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t}var r,n;return r=e,(n=[{key:"getUserInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r){var n=t.data,o=t.handleCardClik;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._cardTemplate=r,this._handleCardClik=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_deleteCard",value:function(){this._card.closest(".element").remove()}},{key:"_handleLikeCard",value:function(){this._buttonForLikeCard.classList.toggle("element__heart_active")}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__photo");return e.src=this._link,e.setAttribute("src",this._link),e.setAttribute("alt","Фото - "+this._name),this._element.querySelector(".element__title").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".element__basket");this._card=t;var r=this._element.querySelector(".element__heart");this._buttonForLikeCard=r;var n=this._element.querySelector(".element__large");this._photoLargeButton=n,this._card.addEventListener("click",(function(){return e._deleteCard()})),this._buttonForLikeCard.addEventListener("click",(function(){return e._handleLikeCard()})),this._photoLargeButton.addEventListener("click",(function(){return e._handleCardClik(e._data)}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=o,this._cardContainer=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._cardContainer.prepend(e)}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function f(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var p=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.code&&i.close()},(n=f(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o;var u=document.querySelector(t);this._popupElement=u;var a=this._popupElement.querySelector(".popup__close-button");this._popupCloseButton=a,this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target===e._popupElement&&e.close()})),this._popupCloseButton.addEventListener("click",(function(){e.close()}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},v.apply(this,arguments)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(n);if(o){var r=b(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var r=(t=i.call(this,e))._popupElement.querySelector(".popup__photo");t._photoPopupLargeImg=r;var n=t._popupElement.querySelector(".popup__caption");return t._captionPopupLargeImg=n,t}return t=u,(r=[{key:"open",value:function(e){v(b(u.prototype),"open",this).call(this),this._photoPopupLargeImg.src=e.link,this._captionPopupLargeImg.textContent=e.name,this._photoPopupLargeImg.setAttribute("src",e.link),this._photoPopupLargeImg.setAttribute("alt","Фото - "+e.name)}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},S.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,n=e.handleFormSubmit;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._handleFormSubmit=n;var o=t._popupElement.querySelector(".popup__form");t._popupForm=o;var a=t._popupElement.querySelectorAll(".popup__input");return t._inputList=a,t}return t=u,(r=[{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;S(w(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault();var r=e._getInputValues();e._handleFormSubmit(r),e.close()}))}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var C=function(){function e(t){var r=t.userNameSelector,n=t.userProfessionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=document.querySelector(r);this._userNameElement=i;var u=document.querySelector(n);this._userProfessionElement=u;var a=document.querySelector(o);this._userAvatarElement=a}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userProfession:this._userProfessionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.data;this._userNameElement.textContent=t.name,this._userProfessionElement.textContent=t.about,this._userAvatarElement.src=t.avatar,this._userAvatarElement.setAttribute("src",t.avatar),this._userAvatarElement.setAttribute("alt","Фото - "+t.name)}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,q(n.key),n)}}function I(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e,t,r){return(t=q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}var B=I((function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"_showInputError",(function(e,t,r){e.textContent=r,e.classList.add(n._config.activeErrorClass),e.classList.remove(n._config.errorClass),t.classList.add(n._config.underlineErrorClass)})),T(this,"_hideInputError",(function(e,t){e.textContent="",e.classList.remove(n._config.activeErrorClass),e.classList.add(n._config.errorClass),t.classList.remove(n._config.underlineErrorClass)})),T(this,"_inactiveButton",(function(){n._submitButton.classList.add(n._config.inactiveButtonClass),n._submitButton.disabled=!0})),T(this,"_activeButton",(function(){n._submitButton.classList.remove(n._config.inactiveButtonClass),n._submitButton.disabled=!1})),T(this,"_checkInputValidity",(function(e){var t=document.querySelector(".".concat(e.id,"-error"));e.validity.valid?n._hideInputError(t,e,n._config):n._showInputError(t,e,e.validationMessage,n._config)})),T(this,"_hasInvalidInput",(function(){return Array.from(n._inputList).some((function(e){return!e.validity.valid}))})),T(this,"_toggleButtonState",(function(){n._hasInvalidInput()?n._inactiveButton(n._config):n._activeButton(n._config)})),T(this,"_setEventListeners",(function(){var e=n._formSelector.querySelector(n._config.submitButtonSelector);n._submitButton=e;var t=Array.from(n._formSelector.querySelectorAll(n._config.inputSelector));n._inputList=t,n._toggleButtonState(n._config),n._formSelector.addEventListener("submit",(function(e){e.preventDefault(),n._inactiveButton(n._config)})),n._inputList.forEach((function(e){e.addEventListener("input",(function(){n._checkInputValidity(e,n._config),n._toggleButtonState(n._config)}))}))})),T(this,"enableValidation",(function(){n._setEventListeners()})),this._config=t,this._formSelector=r})),x={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",activeErrorClass:"popup__input-error_type_visible",errorClass:"popup__input-error_type_hidden",underlineErrorClass:"popup__input_underline-error"},R=document.querySelector(".profile__edit-button"),A=document.querySelector(".popup__form_user"),F=document.querySelector("#user-name"),V=document.querySelector("#user-profession"),U=document.querySelector(".profile__add-button"),N=document.querySelector(".popup__form_card"),D=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}});D.getUserInfo().then((function(e){console.log(e),M.setUserInfo(e)})).catch((function(e){console.error("Ошибка при загрузке: ".concat(e))})),D.getInitialCards().then((function(e){console.log(e)})).catch((function(e){console.error("Ошибка при загрузке: ".concat(e))}));var z=new B(x,A),G=new B(x,N),M=new C({userNameSelector:".profile__user-name",userProfessionSelector:".profile__activity",userAvatarSelector:".profile__avatar"}),H=function(e){return new i({data:e,handleCardClik:function(){K.open(e)}},"#elementTemplate").generateCard()},J=new c({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=H(e);J.addItem(t)}},".elements"),K=new h(".popup_large"),Q=new k({popupSelector:".popup_user",handleFormSubmit:function(e){M.setUserInfo(e)}});Q.setEventListeners();var W=new k({popupSelector:".popup_card",handleFormSubmit:function(e){var t=H(e);J.addItem(t)}});z.enableValidation(),G.enableValidation(),J.renderItems(),K.setEventListeners(),W.setEventListeners(),R.addEventListener("click",(function(){var e=M.getUserInfo();F.value=e.userName,V.value=e.userProfession,Q.open()})),U.addEventListener("click",(function(){W.open()}))})();