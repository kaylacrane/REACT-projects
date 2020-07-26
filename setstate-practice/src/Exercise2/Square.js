/* Blinking square
When you click on the square, its color changes to red. If you click again, it will go back to blue (and back and forth)*/

import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    /*bind event handler and set initial state*/
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      backgroundColor: 'blue',
    };
  }

  onClickHandler() {
    this.setState((prevState) => {
      /*if previous state was backgroundColor = blue then change to red. Otherwise set it as blue.*/
      let newColor = prevState.backgroundColor === 'blue' ? 'red' : 'blue';
      return { backgroundColor: newColor };
    });
  }
  render() {
    return (
      <div>
        <div
          className={`square ${this.state.backgroundColor}`}
          onClick={this.onClickHandler}
        ></div>
      </div>
    );
  }
}

export default Square;
