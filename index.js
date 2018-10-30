import { Calculations } from '~/src/Calculations';
import { CashCheck } from '~/src/CashCheck';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let calc = new Calculations(9, 4)

class App extends Component {
  constructor(props) {
    super(props);
  }

  create_check() {
    let check = new CashCheck();
    check.add('test-01', 2, 15);
    check.add('test-02', 3, 5);
    check.add('test-03', 2, 10);
    check.add('test-04', 4, 5);
    return check;
  }

  render() {
    let calc = new Calculations(9, 4)
    let check = this.create_check();
    check.delete('test-03');
    return (
      <div>
        Hello, world
        <p>Сalculation 9 & 4</p>
        <p>Add = {calc.getAdd()}</p>
        <p>Minus = {calc.getMinus()}</p>
        <p>Mult = {calc.getMult()}</p>
        <hr/>
        <p>Check</p>
        <ul>
          {
            check.items.map((item) => (
              <li>{item.name}: {item.quantity} x {item.price} = {item.total}</li>
            ))
          }
        </ul>
        <p>Total: {check.total}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
