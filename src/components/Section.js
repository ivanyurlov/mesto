export class Section {
  constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardContainer = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._cardContainer.prepend(element);
  }
};




















//function createCard(item) {
//  const card = new Card(item, '#elementTemplate', handleLargePhoto);
//  const cardElement = card.generateCard();
//  return cardElement;
//}

//function renderCard (cardElement) {
//  const cardReady = createCard(cardElement);
//  cardsContainer.prepend(cardReady);
//};