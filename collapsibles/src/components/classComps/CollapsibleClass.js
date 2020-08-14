import React, { Component } from 'react';

class Collapsible extends Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default Collapsible;
