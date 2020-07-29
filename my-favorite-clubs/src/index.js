import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './Components/usingClassState/App';
// import App from './Components/App';
// import AppFunctional from './Components/functional/AppFunctional';
// change from App to AppFunctional above and below to see the page built by class or functional components

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
