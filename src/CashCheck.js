class LineItem {
  constructor(name, quantity, price) {
    this._name = name;
    this._quantity = quantity;
    this._price = price;
    this._total = this._price * this._quantity;
  }

  get total() { return this._total; }
  get name() { return this._name; }
  get quantity() { return this._quantity; }
  get price() { return this._price; }

  print() {
    console.log(`Item: ${this._name}, qnt: ${this._quantity}, price: ${this._price}, total: ${this._total}`);
  }
}

export class CashCheck {
  constructor() {
    this._items = [];
    this._total = 0;
  }

  add(name, quantity, price) {
    let li = new LineItem(name, quantity, price);
    this._items.push(li)
    this._total = this._total + li.total;
  }

  delete(name) {
    let ind = this._items.map((item) => { return item.name; }).indexOf(name);
    let item = this._items[ind];
    this._items.splice(ind, 1);
    this._total = this._total - item.total;
  }

  get items() { return this._items; }
  get total() { return this._total; }

  print() {
    this._items.forEach(function(el) {
      console.log(`${el.name}: ${el.total}`);
    });
    console.log(`Total: ${this._total}`);
  }
}
