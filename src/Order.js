export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((prev, curr) =>
      prev += curr?.price, 0
    );
  }

  getTaxes() {
    return this.items.reduce((sum, item) => {
      if (item instanceof TaxItem) {
        return sum += item.calculateTax();
      }
      return sum;
    }, 0)
  }


}