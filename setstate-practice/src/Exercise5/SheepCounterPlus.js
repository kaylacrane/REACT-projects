/*Basic counter that increases displayed number by one with each click of a button. Bonus: Also displays a sheep emoji */

import React from 'react';
import SheepImg from './SheepImg';

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
      padding: '20px 0',
    };
    const styleBtn = {
      fontSize: '40px',
      borderRadius: '20px',
      padding: '20px',
      maxWidth: 'fit-content',
      marginBottom: '25px',
    };
    return (
      <div style={stylePage} className="container">
        <h1>Sheep Counter</h1>
        <button className="btn" onClick={this.updateCounter} style={styleBtn}>
          Count{' '}
          <span role="img" aria-label="sheep emoji">
            🐑
          </span>
        </button>
        <div className="counter">{this.state.counter}</div>
        {/* here we insert our sheep emojis that are generated and displayed with each click using a child */}
        <SheepImg sheepNumber={this.state.counter} />
      </div>
    );
  }
}

export default App;
