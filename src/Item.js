export default class Item {
  category;
  description;
  price;
  constructor(category, description, price) {
    this.category = category;
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

}
