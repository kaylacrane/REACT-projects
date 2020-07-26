import React, { Component } from 'react';
import sheep from './sheep.png';

class SheepImg extends Component {
  render() {
    /*we can't use map() on a number so we create an array filled with the counter number of "sheep" For example counter number is 3 so array is ['sheep', 'sheep', 'sheep']*/
    let sheepNumber = new Array(this.props.sheepNumber).fill('sheep');

    const sheepStyle = {
      width: '50px',
      height: '50px',
      margin: '10px',
    };
    const sheepContainerStyle = {
      width: '70%',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    };
    /*we build our html using map to create as many sheep images as our counter number*/
    const sheepHtml = sheepNumber.map((number, i) => (
      <img key={i} src={sheep} alt="sheep" style={sheepStyle} />
    ));
    return <div style={sheepContainerStyle}>{sheepHtml}</div>;
  }
}

export default SheepImg;
