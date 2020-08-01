import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClickHandlerChild = this.onClickHandlerChild.bind(this);
  }
  onClickHandlerChild(ev) {
    this.props.onClickHandler(ev);
  }
  render() {
    return <button onClick={this.onClickHandlerChild}>Search</button>;
  }
}

export default Button;
