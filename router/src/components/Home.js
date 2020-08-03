import React, { Component } from 'react';
import Modal from './Modal';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
  }
  renderModal() {
    return <Modal title="Hi there" />;
  }
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          reprehenderit sint alias repellat aspernatur assumenda laudantium
          nulla eius, est voluptatem facere exercitationem et repellendus maxime
          nostrum cumque a id accusantium.
        </p>
        <nav>
          <li>
            <Link to="/modal1">Modal 1</Link>
          </li>
          <li>
            <Link to="/modal2">Modal 2</Link>
          </li>
        </nav>
        <Switch>
          <Route exact path="/modal1" component={Modal} />
          <Route exact path="/modal2" component={Modal} />
        </Switch>
      </div>
    );
  }
}

export default Home;
