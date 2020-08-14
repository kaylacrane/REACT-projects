import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <img className="icon" src={this.props.fa} />
        <div>
          <h2 className="clubName"></h2>
          <span className="members"></span>
          <ul className="membersList"></ul>
        </div>
      </div>
    );
  }
}

export default Item;
