export class Calculations {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  get x() { return this._x; }
  set x(value) { this._x = value; }

  get y() { return this._y; }
  set y(value) { this._y = value; }

  getAdd() { return this.x + this.y; }
  getMinus() { return this.x - this.y; }
  getMult() { return this.x * this.y; }
}
