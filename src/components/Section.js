export class Section {
  constructor ({renderer}, containerSelector) {
    this._renderer = renderer;
    this._cardContainer = document.querySelector(containerSelector);
  }
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._cardContainer.prepend(item);
  }

  addNewItem(item) {
    this._cardContainer.append(item);
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