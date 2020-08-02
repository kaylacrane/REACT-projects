import React, { Component } from 'react';
import Show from './Show';

class ShowList extends Component {
  render() {
    const { shows } = this.props;
    return (
      <ul className="show-list">
        {shows.map((show) => {
          return (
            <Show
              key={show.show.id}
              id={show.show.id}
              image={show.show.image}
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
