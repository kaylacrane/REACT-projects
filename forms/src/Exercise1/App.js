import React from 'react';
import './App.css';
import Form from '../Exercise1/Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(ev) {
    if (ev.currentTarget.id === 'name') {
      this.setState({ name: ev.currentTarget.value });
    } else if (ev.currentTarget.id === 'description') {
      this.setState({ description: ev.currentTarget.value });
    } else if (ev.currentTarget.id === 'language') {
      this.setState({ language: ev.currentTarget.value });
    }
  }

  render() {
    return (
      <div className="App">
        <Form handleForm={this.handleForm} formInfo={this.state} />
      </div>
    );
  }
}
export default App;
