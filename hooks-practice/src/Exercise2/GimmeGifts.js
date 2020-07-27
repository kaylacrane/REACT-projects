import React, { useState } from 'react';

function App(props) {
  const [age, setAge] = useState(20);
  const randomNumber = () => Math.floor(Math.random() * 20);
  const onClickHandler = () => {
    setAge(age + 1);
    setGifts(randomNumber());
  };
  const [gifts, setGifts] = useState(1);
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
  const variableStyle = {
    color: 'green',
  };
  return (
    <div style={pageStyle}>
      <div>
        I am <span style={variableStyle}>{age}</span> years old and I have{' '}
        <span style={variableStyle}>{gifts}</span> gift(s)
      </div>
      <button type="button" onClick={onClickHandler} style={buttonStyle}>
        Gimme gifts
      </button>
    </div>
  );
}

export default App;
