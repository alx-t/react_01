import { Calculations } from '~/src/Calculations';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let calc = new Calculations(9, 4)

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    calc = new Calculations(9, 4)
    return (
      <div>
        Hello, world
        <p>Сalculation 9 & 4</p>
        <p>Add = {calc.getAdd()}</p>
        <p>Minus = {calc.getMinus()}</p>
        <p>Mult = {calc.getMult()}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
