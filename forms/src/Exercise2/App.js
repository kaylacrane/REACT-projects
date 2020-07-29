import React from 'react';
import '../App.css';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      job: '',
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(ev) {
    /*a more dynamic way of doing the if statements below*/
    const stateAttribute = ev.currentTarget.id;
    const value = ev.currentTarget.value;
    this.setState({ [stateAttribute]: value });

    // if (ev.currentTarget.id === 'email') {
    //   this.setState({ email: ev.currentTarget.value });
    // } else if (ev.currentTarget.id === 'job') {
    //   this.setState({ job: ev.currentTarget.value });
    // }
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
