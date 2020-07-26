/* User input
Create a simple page with a text input. As user types text it also appears in a paragraph below*/

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    /*set up bind for event handler*/
    this.onChangeHandler = this.onChangeHandler.bind(this);
    /*set initial state*/
    this.state = { text: 'Your text appears here' };
  }
  onChangeHandler(ev) {
    /*takes in event data (user input text)*/
    const textInput = ev.currentTarget.value;
    /*updates state using this input*/
    this.setState({
      text: textInput,
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeHandler}></input>
        {/* paragraph text is automatically updated */}
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
