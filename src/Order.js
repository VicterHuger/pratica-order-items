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
    const categoryTaxes = {
      "Beer": 0.2,
      "Cigar": 0.25,
      "Eletronics": 0.3,
      "Water": 0
    };

    return this.items.reduce((prev, curr) => {
      return prev + curr?.price * categoryTaxes[curr?.category];
    }, 0);
  }


}