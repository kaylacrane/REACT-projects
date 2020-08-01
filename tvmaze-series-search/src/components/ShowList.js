import React, { Component } from 'react';
import Show from './Show';
import dogImg from '../images/go-doggie.JPG';

class ShowList extends Component {
  render() {
    console.log(this.props);
    const { shows } = this.props;
    return (
      <ul className="show-list">
        {shows.map((show) => {
          return (
            <Show
              key={show.show.id}
              id={show.show.id}
              image={dogImg}
              name={show.show.name}
              score={show.score}
              status={show.show.status}
            />
          );
        })}
      </ul>
    );
  }
}

export default ShowList;
