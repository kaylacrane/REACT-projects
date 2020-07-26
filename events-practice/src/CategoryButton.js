import React, { Component } from 'react';

class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.buttonFilterHandlerChild = this.buttonFilterHandlerChild.bind(this);
  }
  buttonFilterHandlerChild() {
    /*we pass our category data up to parent*/
    this.props.buttonFilterHandler(this.props.category);
  }
  render() {
    return (
      <button className="button" onClick={this.buttonFilterHandlerChild}>
        {this.props.category}
      </button>
    );
  }
}

export default CategoryButton;
