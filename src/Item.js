export default class Item {
  category;
  description;
  price;
  constructor(description, price) {
    this.description = description;
    this.price = price;
  }

}

export class TaxItem extends Item {
  category;
  description;
  price;
  taxValue;
  constructor(category, description, price) {
    super(category, description, price);
    this.category = category;
    this.description = description;
    this.price = price;
    this.taxValue = 0;
  }

  calculateTax(tax) {
    return this.taxValue = this.price * tax;
  }

}
