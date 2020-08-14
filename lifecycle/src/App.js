import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Relax from './Relax';
import Counter from './Counter';

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/relax">Relax</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/relax" component={Relax} />
      </Switch>
    </main>
  );
}

export default App;
