import React, { useState } from 'react';

function App(props) {
  const [age, setAge] = useState(20);
  const makeOld = () => {
    setAge(age + 1);
  };
  const pageStyle = {
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '40px',
  };
  const buttonStyle = {
    fontSize: '30px',
    backgroundColor: 'green',
    color: 'lightgreen',
    borderRadius: '20px',
    boxShadow: '0 0 20px grey',
    border: 'none',
    height: '50px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  return (
    <div style={pageStyle}>
      <div>
        I am <span>{age} years old</span>
      </div>
      <button type="button" onClick={makeOld} style={buttonStyle}>
        Make me older
      </button>
    </div>
  );
}

export default App;
