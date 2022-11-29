export default class Item {
  constructor(category, description, price) {
    if (this.constructor === Item) throw new Error("Item classes can not be instantiated");
    this.category = category;
    this.description = description;
    this.price = price;
  }

}
