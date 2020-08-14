import React, { Component } from 'react';
import Modal from './Modal';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor</p>
        <nav>
          <li>
            <Link to="/modal1">Modal 1</Link>
          </li>
          <li>
            <Link to={{ pathname: '/modal2', title: 'hi there' }}>Modal 2</Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default Home;
