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
      genre: [],
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(ev) {
    const stateAttribute = ev.currentTarget.id;

    const value = ev.currentTarget.value;

    /* controlling checkboxes*/
    if (stateAttribute === 'genre' && this.state.genre.includes(value)) {
      /* if genre is already in list remove it*/
      const genreList = this.state.genre;
      const index = genreList.findIndex(value);
      genreList.splice(index, 1);
      console.log(value);
    } else if (stateAttribute === 'genre' && !genreList.includes(value)) {
      if (genreList.length < 3) {
        genreList.push(value);
      } else {
        alert('only three please');
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
