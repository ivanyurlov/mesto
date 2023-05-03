(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e}var r,n;return r=t,(n=[{key:"getUserInfo",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/users/me",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-65/cards",{method:"GET",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){var n=e.data,o=e.handleCardClik;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._cardTemplate=r,this._handleCardClik=o}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"_deleteCard",value:function(){this._card.closest(".element").remove()}},{key:"_handleLikeCard",value:function(){this._buttonForLikeCard.classList.toggle("element__heart_active")}},{key:"generateCard",value:function(){this._element=this._getTemplate();var t=this._element.querySelector(".element__photo");return t.src=this._link,t.setAttribute("src",this._link),t.setAttribute("alt","Фото - "+this._name),this._element.querySelector(".element__title").textContent=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this,e=this._element.querySelector(".element__basket");this._card=e;var r=this._element.querySelector(".element__heart");this._buttonForLikeCard=r;var n=this._element.querySelector(".element__large");this._photoLargeButton=n,this._card.addEventListener("click",(function(){return t._deleteCard()})),this._buttonForLikeCard.addEventListener("click",(function(){return t._handleLikeCard()})),this._photoLargeButton.addEventListener("click",(function(){return t._handleCardClik(t._data)}))}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._cardContainer=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._cardContainer.prepend(t)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var p=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.code&&i.close()},(n=f(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o;var u=document.querySelector(e);this._popupElement=u;var a=this._popupElement.querySelector(".popup__close-button");this._popupCloseButton=a,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){e.target===t._popupElement&&t.close()})),this._popupCloseButton.addEventListener("click",(function(){t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(o){var r=d(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=(e=i.call(this,t))._popupElement.querySelector(".popup__photo");e._photoPopupLargeImg=r;var n=e._popupElement.querySelector(".popup__caption");return e._captionPopupLargeImg=n,e}return e=u,(r=[{key:"open",value:function(t){v(d(u.prototype),"open",this).call(this),this._photoPopupLargeImg.src=t.link,this._captionPopupLargeImg.textContent=t.name,this._photoPopupLargeImg.setAttribute("src",t.link),this._photoPopupLargeImg.setAttribute("alt","Фото - "+t.name)}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(n);if(o){var r=w(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleFormSubmit;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleFormSubmit=n;var o=e._popupElement.querySelector(".popup__form");e._popupForm=o;var a=e._popupElement.querySelectorAll(".popup__input");return e._inputList=a,e}return e=u,(r=[{key:"close",value:function(){g(w(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;g(w(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(e){e.preventDefault();var r=t._getInputValues();t._handleFormSubmit(r),t.close()}))}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var k=function(){function t(e){var r=e.userNameSelector,n=e.userProfessionSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=document.querySelector(r);this._userNameElement=i;var u=document.querySelector(n);this._userProfessionElement=u;var a=document.querySelector(o);this._userAvatarElement=a}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userProfession:this._userProfessionElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar;this._userNameElement.textContent=e,this._userProfessionElement.textContent=r,this._userAvatarElement.src=n,this._userAvatarElement.setAttribute("src",n),this._userAvatarElement.setAttribute("alt","Фото - "+e)}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function I(t,e,r){return e&&L(t.prototype,e),r&&L(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function T(t,e,r){return(e=q(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}var B=I((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,"_showInputError",(function(t,e,r){t.textContent=r,t.classList.add(n._config.activeErrorClass),t.classList.remove(n._config.errorClass),e.classList.add(n._config.underlineErrorClass)})),T(this,"_hideInputError",(function(t,e){t.textContent="",t.classList.remove(n._config.activeErrorClass),t.classList.add(n._config.errorClass),e.classList.remove(n._config.underlineErrorClass)})),T(this,"_inactiveButton",(function(){n._submitButton.classList.add(n._config.inactiveButtonClass),n._submitButton.disabled=!0})),T(this,"_activeButton",(function(){n._submitButton.classList.remove(n._config.inactiveButtonClass),n._submitButton.disabled=!1})),T(this,"_checkInputValidity",(function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.validity.valid?n._hideInputError(e,t,n._config):n._showInputError(e,t,t.validationMessage,n._config)})),T(this,"_hasInvalidInput",(function(){return Array.from(n._inputList).some((function(t){return!t.validity.valid}))})),T(this,"_toggleButtonState",(function(){n._hasInvalidInput()?n._inactiveButton(n._config):n._activeButton(n._config)})),T(this,"_setEventListeners",(function(){var t=n._formSelector.querySelector(n._config.submitButtonSelector);n._submitButton=t;var e=Array.from(n._formSelector.querySelectorAll(n._config.inputSelector));n._inputList=e,n._toggleButtonState(n._config),n._formSelector.addEventListener("submit",(function(t){t.preventDefault(),n._inactiveButton(n._config)})),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t,n._config),n._toggleButtonState(n._config)}))}))})),T(this,"enableValidation",(function(){n._setEventListeners()})),this._config=e,this._formSelector=r})),R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",activeErrorClass:"popup__input-error_type_visible",errorClass:"popup__input-error_type_hidden",underlineErrorClass:"popup__input_underline-error"},A=document.querySelector(".profile__edit-button"),x=document.querySelector(".popup__form_user"),F=document.querySelector("#user-name"),V=document.querySelector("#user-profession"),U=document.querySelector(".profile__add-button"),N=document.querySelector(".popup__form_card"),D=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"8f7d7381-1699-4147-b766-23ace6ae1f0d","Content-Type":"application/json"}});D.getUserInfo().then((function(t){M.setUserInfo(t)})).catch((function(t){console.error("Ошибка при загрузке: ".concat(t))})),D.getInitialCards().then((function(t){J.renderItems(t)})).catch((function(t){console.error("Ошибка при загрузке: ".concat(t))}));var z=new B(R,x),G=new B(R,N),M=new k({userNameSelector:".profile__user-name",userProfessionSelector:".profile__activity",userAvatarSelector:".profile__avatar"}),H=function(t){return new i({data:t,handleCardClik:function(){K.open(t)}},"#elementTemplate").generateCard()},J=new c({renderer:function(t){return H(t)}},".elements"),K=new _(".popup_large"),Q=new P({popupSelector:".popup_user",handleFormSubmit:function(t){M.setUserInfo(t)}});Q.setEventListeners();var W=new P({popupSelector:".popup_card",handleFormSubmit:function(t){var e=H(t);J.addItem(e)}});z.enableValidation(),G.enableValidation(),K.setEventListeners(),W.setEventListeners(),A.addEventListener("click",(function(){var t=M.getUserInfo();F.value=t.userName,V.value=t.userProfession,Q.open()})),U.addEventListener("click",(function(){W.open()}))})();