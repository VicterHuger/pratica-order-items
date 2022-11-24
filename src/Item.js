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
  constructor(description, price) {
    super(description, price);
    this.description = description;
    this.price = price;
    this.taxValue = 0;
  }

  getTax(tax) {
    return this.taxValue = this.price * tax;
  }

}
