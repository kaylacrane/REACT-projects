import React, { Component } from 'react';
import Collapsible from './CollapsibleClass';
import Item from './ItemClass';

class List extends Component {
  render() {
    const clubs = this.props.clubs.clubs;
    console.log(this.props);
    const clubsCollapsibles = clubs.map((club, index) => {
      return (
        <Collapsible key={index}>
          <Item
            id={`collapsible-${index}`}
            club={club}
            collapsibleHandler={this.props.collapsibleHandler}
            activeCollapsible={this.props.activeCollapsible}
          />
        </Collapsible>
      );
    });
    return <div>{clubsCollapsibles}</div>;
  }
}

export default List;
