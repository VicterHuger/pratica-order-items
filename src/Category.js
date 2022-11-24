import Item, { TaxItem } from "./Item.js";

export class Water extends Item {
  constructor(description, price) {
    super(description, price);
    this.description = description;
    this.price = price;
  }
}

export class Beer extends TaxItem {
  constructor(description, price) {
    super(description, price);
    this.description = description;
    this.price = price;
    this.tax = 0.2;
  }
}

export class Cigar extends TaxItem {
  constructor(description, price) {
    super(description, price);
    this.description = description;
    this.price = price;
    this.tax = 0.25;
  }
}
