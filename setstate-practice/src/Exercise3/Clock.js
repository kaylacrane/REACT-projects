/*Display current time and have it auto update every second*/

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    /*bind our update method*/
    this.updateTime = this.updateTime.bind(this);
    /*establish initial time state*/
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };
  }

  updateTime() {
    /*setInterval tells how often to execute method to get new time*/
    setInterval(() => {
      /* we can also use a combination of new Date().getHours() + new Date().getMinutes() + new Date().getSeconds()*/
      this.setState({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);
  }
  render() {
    const pageStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '40px',
    };
    const clockStyle = {
      backgroundColor: 'black',
      textAlign: 'center',
      padding: '50px',
      fontSize: '70px',
      borderRadius: '25px',
      color: 'white',
    };
    return (
      <div style={pageStyle}>
        <h1>Current Time</h1>
        <p className="time" style={clockStyle}>
          {/* insert state value */}
          {this.state.time}
        </p>
        <p>Date: {this.state.date}</p>
        {/* call our method to update time */}
        {this.updateTime()}
      </div>
    );
  }
}

export default App;
