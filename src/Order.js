export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((prev, curr) => {
      return prev + curr?.price;
    }, 0);
  }

  getTaxes() {
    return this.items.reduce((prev, curr) => {
      return prev + (curr?.taxValue || 0);
    }, 0);
  }


}