import React, { Component } from 'react';

const defaultImg = 'https://dummyimage.com/215x300/000/fff.png&text=';
class Show extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, name, score, status } = this.props;
    return (
      <div className={`show-info show-${id}`}>
        <img
          src={image ? image.medium : defaultImg + name}
          className="show-image"
          alt="show cover"
        />
        <h2 className="show-title">{name}</h2>
        <span className="show-score">{score}</span>
        <span className="show-status">{status}</span>
      </div>
    );
  }
}

export default Show;
