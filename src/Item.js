export default class Item {
  description;
  price;
  constructor(description, price) {
    this.description = description;
    this.price = price;
  }

}

export class TaxItem extends Item {
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
