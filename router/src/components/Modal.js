import React, { Component } from 'react';

class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.location.title}</h2>
        <p>Modal page</p>
      </div>
    );
  }
}

export default Modal;
