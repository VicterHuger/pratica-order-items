import Item, { TaxItem } from "./Item.js";

export class Water extends Item {
  constructor(description, price) {
    super(description, price);
    this.description = description;
    this.price = price;
  }
}
