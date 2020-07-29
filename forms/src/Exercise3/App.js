import React from 'react';
import '../App.css';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      job: '',
      edad: '',
      genre: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(ev) {
    /*a more dynamic way of doing the if statements below*/
    const stateAttribute = ev.currentTarget.id;
    console.log(stateAttribute);
    const value = ev.currentTarget.value;
    console.log(value);
    if (stateAttribute === 'genre') {
      if (this.state.genre === value) {
        this.setState({ genre: '' });
      } else {
        this.setState({ genre: value });
      }
    } else {
      this.setState({ [stateAttribute]: value });
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
