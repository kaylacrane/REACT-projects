import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props);
    // this.isEmpty = this.isEmpty.bind(this);
  }
  //   isEmpty(variable) {
  //     if (variable === null) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  render() {
    const { id, image, name, score, status } = this.props;
    return (
      <div className={`show-info show-${id}`}>
        <img src={image} className="show-image" alt="show cover" />
        <h2 className="show-title">{name}</h2>
        <span className="show-score">{score}</span>
        <span className="show-status">{status}</span>
      </div>
    );
  }
}

export default Show;
