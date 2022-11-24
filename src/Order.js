export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }


}