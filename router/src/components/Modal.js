import React, { Component } from 'react';

class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eos
          quibusdam sunt quos cupiditate temporibus, quaerat id repellat,
          dignissimos nisi neque similique odit. Quia ipsa molestias placeat
          consectetur, doloribus recusandae.
        </p>
      </div>
    );
  }
}

export default Modal;
