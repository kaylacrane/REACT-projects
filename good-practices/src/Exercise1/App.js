import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 4, 6, 8, 45, 89, 100],
      filter: '',
      evensOnly: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(ev) {
    const target = ev.currentTarget;
    if (target.id === 'evensOnly') {
      target.checked === true
        ? this.setState({ evensOnly: true })
        : this.setState({ evensOnly: false });
    } else {
      const input = target.value;
      this.setState({ filter: input });
    }
  }
  render() {
    const numbersHtml = this.state.numbers
      .filter((n) => n > this.state.filter)
      .filter((n) => {
        if (this.state.evensOnly === true) {
          return n % 2 === 0;
        } else {
          return true;
        }
      })
      .map((n, i) => {
        return <li key={i}>{n}</li>;
      });

    return (
      <div className="container">
        <fieldset className="filters-box">
          <legend>Filters</legend>
          <label htmlFor="filter-number">
            Filter out numbers greater than:
          </label>
          <input
            type="number"
            id="filter-number"
            onChange={this.changeHandler}
            value={this.state.filter}
          />
          <label htmlFor="evens">FIlter out odd numbers:</label>
          <input type="checkbox" id="evensOnly" onChange={this.changeHandler} />
        </fieldset>
        <div className="numbers-list">{numbersHtml}</div>
      </div>
    );
  }
}

export default App;
