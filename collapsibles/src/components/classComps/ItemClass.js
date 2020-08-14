import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.collapsibleHandlerChild = this.collapsibleHandlerChild.bind(this);
  }
  collapsibleHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
  }
  render() {
    const { name, fa, members } = this.props.club;
    const membersList = members.map((member, i) => {
      return <li key={i}>{member}</li>;
    });

    return (
      <div
        id={this.props.id}
        onClick={this.collapsibleHandlerChild}
        className={`collapse-item ${
          this.props.activeCollapsible === this.props.id ? 'active' : ''
        }`}
      >
        <i className={`icon ${fa}`}></i>
        <div className="content">
          <h2>{name}</h2>
          <span className="members">Members:</span>
          <ul className="membersList">{membersList}</ul>
        </div>
      </div>
    );
  }
}

export default Item;
