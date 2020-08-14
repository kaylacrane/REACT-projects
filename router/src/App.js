import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Pricing from './components/Pricing';
import About from './components/About';
import Home from './components/Home';
import Modal from './components/Modal';

function App() {
  return (
    <main className="main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/modal1" component={Modal} />
        <Route exact path="/modal2" component={Modal} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </main>
  );
}

export default App;
