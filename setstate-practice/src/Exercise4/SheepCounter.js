/*Basic counter that increases displayed number by one with each click of a button*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*bind our event handler method*/
    this.updateCounter = this.updateCounter.bind(this);
    /*establish initial counter state*/
    this.state = {
      counter: 0,
    };
  }
  updateCounter() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter++,
      };
    });
  }
  render() {
    const stylePage = {
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '50px',
      padding: '30px 0',
    };
    const styleBtn = {
      fontSize: '40px',
      borderRadius: '20px',
      padding: '20px',
      maxWidth: 'fit-content',
    };
    return (
      <div style={stylePage} className="">
        <h1>Sheep Counter</h1>
        <button className="btn" onClick={this.updateCounter} style={styleBtn}>
          Count 🐑
        </button>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
