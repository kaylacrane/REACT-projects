import React from 'react';

class ReasonBlock extends React.Component {
  render() {
    return (
      <div className="main__reasons--block">
        <h3 className="main__reasons--blockTitle">{this.props.title}</h3>
        <p className="main__reasons--blockText">{this.props.text}</p>
      </div>
    );
  }
}

export default ReasonBlock;
